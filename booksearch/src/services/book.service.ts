import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { BookRes, ExpectBook, ItemsEntity } from './interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  bookSubject$ = new BehaviorSubject<ExpectBook[]>([]);
  // private wishList: string[] = [];

  private wishlist$ = new BehaviorSubject<string[]>([]);
  wishListSubject$ = this.wishlist$.asObservable();

  constructor(private http: HttpClient) {}

  searchBooks(bookName: string): void {
    const url = `${this.baseUrl}?q=${encodeURIComponent(bookName)}`;
    this.http.get<BookRes>(url).subscribe({
      next: (response) => {
        const books: ExpectBook[] = response.items?.map(({ volumeInfo }: ItemsEntity) => ({
          bookName: volumeInfo.title,
          bookPic: volumeInfo.imageLinks?.thumbnail || '', 
          publisher: volumeInfo.publisher || '', 
          publishDate: volumeInfo.publishedDate || '', 
          description: volumeInfo.description || '', 
        })) || [];
        this.bookSubject$.next(books);
      },
      error: (error) => {
        console.error('Error fetching books:', error);
        this.bookSubject$.next([]); // Emit empty array on error
      }
    });
  }

  getBooks(name: string) {
    return this.http.get<BookRes>(this.baseUrl + name).pipe(
      map((val: BookRes) => {
        return val.items?.map(({ volumeInfo: info }: ItemsEntity) => {
          return {
            bookName: info.title,
            bookPic: info.imageLinks.thumbnail,
            publisher: info.publisher,
            publishDate: info.publishedDate,
            description: info.description,
          } as ExpectBook;
        });
      }),
      tap((val: ExpectBook[]) => {
        this.bookSubject$.next(val);
      }),
      catchError((err) => {
        return of({ bookName: '' });
      })
    );
  }

  addToWishList(book: ExpectBook): void {
    // this.wishList = [book.bookName, ...this.wishList];
    const currentWishlist = this.wishlist$.value;

    const isDuplicate = currentWishlist.includes(book.bookName);

    if(!isDuplicate){
    this.wishlist$.next([book.bookName, ...this.wishlist$.value]);
  }else{
    alert("book is already in wishlist");
  }
  }

  removeFromWishList(bookName: string): void{
    const updatedList = this.wishlist$.value.filter((book) => {book !== bookName});
    this.wishlist$.next(updatedList);
  }
}
