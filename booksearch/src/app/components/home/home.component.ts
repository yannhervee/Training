import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { WishListComponent } from '../wish-list/wish-list.component';
import { BooklistComponent } from '../booklist/booklist.component';
import { WishListPageComponent } from '../wish-list-page/wish-list-page.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, BooklistComponent, WishListPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {

}
