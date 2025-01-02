import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';


import { ItuneApiService } from '../services/itune-api.service';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FontAwesomeModule, FormsModule, ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  faSearch = faSearch

  searchInput: string = "";

  constructor(private ituneApiService: ItuneApiService) {}


  onSearch(): void {
    if (this.searchInput.trim()) {
      console.log('Search input:', this.searchInput);

      this.ituneApiService.fetchMusic(this.searchInput).subscribe({
        next: (response) => {
          console.log('API Response:', response);
          this.ituneApiService.updateMusics(response)
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        },
      });
    }

  }
}
