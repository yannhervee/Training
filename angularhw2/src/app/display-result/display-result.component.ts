import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItuneApiService } from '../services/itune-api.service';
import { ItunesResponse, Music } from '../interfaces/Music';

@Component({
  selector: 'app-display-result',
  imports: [CommonModule,],
  templateUrl: './display-result.component.html',
  styleUrl: './display-result.component.css'
})
export class DisplayResultComponent {
  musics: Music[] = []; 
  resultCount: number = 0;
  noSearch: boolean = true;
  constructor(private ituneApiService: ItuneApiService) {}

  ngOnInit(): void {
    // Subscribe to album updates from the service
    this.ituneApiService.getMusics().subscribe({
      next: (response) => {
        if (response) {
          this.musics = response.results;
          this.resultCount = response.resultCount;
          this.noSearch = false;
        }
      },
    });
  }

}
