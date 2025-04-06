import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VolumeInfo } from '../../Interfaces/book';
import { Subject, debounceTime } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  searchInput: string = "";
  books: VolumeInfo[] = [];
  private bookService = inject(BookService)
  // constructor(private bookServices : BookService){}
  private searchSubject = new Subject<string>();
  selectedBooks: VolumeInfo[] = [];
  // ngOnInit(): void {
  //   this.bookService.bookList$.subscribe((data)=> {
  //     console.log("data ", data)
  //     this.books = data;
  //   })
  //   // this.bookService.fetchBookLists(this.searchInput).subscribe(console.log);
    
  // }

  ngOnInit(): void {
    // Listen to debounced input
    this.searchSubject.pipe(
      debounceTime(300) // waits 300ms after user stops typing
    ).subscribe((input) => {
      this.bookService.fetchBookLists(input).subscribe(); // this updates bookList$
    });
  
    // Listen to results
    this.bookService.bookList$.subscribe((data) => {
      this.books = data;
    });
  }
  

  search(value : string){
    console.log("searchIput ", this.searchInput)
  
      this.searchInput = value;
      this.searchSubject.next(value); // push into the Subject
    
  }

  selectBook(book: VolumeInfo): void {
    // Avoid adding duplicates
    if (!this.selectedBooks.includes(book)) {
      this.selectedBooks.push(book);
    }
    this.bookService.setSelectedBooks(this.selectedBooks);
  }
  
  removeBook(index: number): void {
    this.selectedBooks.splice(index, 1);
    this.bookService.setSelectedBooks(this.selectedBooks);
  }
 

}
