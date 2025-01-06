import { Component } from '@angular/core';

import { BookService } from '../../../services/book.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private searchSubject = new Subject<string>();
  bookName: string = " ";

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((searchText) => {
        this.bookService.searchBooks(searchText);
      });
  }

  onInputChange(): void {
    this.searchSubject.next(this.bookName);
  }

  handleSearch(): void {

    if(this.bookName.trim()){
      this.bookService.searchBooks(this.bookName);
    }
    console.log("serarch worked")
  }

}
