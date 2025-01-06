import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  itemlist = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectAll: [false], 
      movies: this.fb.array(this.itemlist.map(() => false)) 
    });
  }

  get moviesFormArray(): FormArray {
    return this.form.get('movies') as FormArray;
  }

  
  handleSelectAll(): void {
    const isChecked = this.form.get('selectAll')?.value;
    
    this.moviesFormArray.controls.forEach(control => control.setValue(isChecked));
  }
 
  handleMovieSelection(): void {
    const allChecked = this.moviesFormArray.controls.every(control => control.value);
    this.form.get('selectAll')?.setValue(allChecked, { emitEvent: false }); 
  }

  handleClearAll(): void {
    this.form.get('selectAll')?.setValue(false, { emitEvent: false });
    this.moviesFormArray.controls.forEach(control => control.setValue(false));
  }

  get selectedMovies(): string[] {
    return this.itemlist.filter((_, index) => this.moviesFormArray.at(index).value);
  }
}
