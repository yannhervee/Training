import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Book, VolumeInfo } from '../Interfaces/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes'; //bookname

  private bookListSubject = new BehaviorSubject<VolumeInfo[]>([]);
  bookList$ = this.bookListSubject.asObservable();
  selectedBooks$ = signal<VolumeInfo[]>([])


  fetchBookLists(bookName: string){
    return this.http.get<Book>(`${this.baseUrl}?q=${bookName}`).pipe(
      map((res) => {
        console.log("result ", res);
        return res.items.map((item) => item.volumeInfo)
      }),
      tap((data: VolumeInfo[])=> {
        console.log("data after tap ", data)
        this.bookListSubject.next(data);
      })
     
    )
  }

  setSelectedBooks(books: VolumeInfo[]): void {
    this.selectedBooks$.set(books);
    console.log(this.selectedBooks$())
  }
  
  getSelectedBooks(): VolumeInfo[] {
    return this.selectedBooks$();
  }
}
