import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../../services/interfaces/movie';

@Component({
  selector: 'app-movie-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  @Output() selectedMovie = new EventEmitter<Movie>();

  handleSelectedMovie(): void {
    this.selectedMovie.emit(this.movie);
  }


}
