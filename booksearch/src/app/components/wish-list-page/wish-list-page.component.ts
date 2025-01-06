import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExpectBook } from '../../../services/interfaces/book';
import { BookService } from '../../../services/book.service';
import { WishListComponent } from '../wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list-page',
  imports: [CommonModule, WishListComponent, FormsModule],
  templateUrl: './wish-list-page.component.html',
  styleUrl: './wish-list-page.component.css'
})
export class WishListPageComponent {
  wishBooks!: string[];
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.wishListSubject$.subscribe({
      next: (books) => {
        this.wishBooks = books
      },
    })
  }
   
  

  handleDeleteBook(book: string){
    console.log("deleting book");
    this.bookService.removeFromWishList(book);


  }


}
