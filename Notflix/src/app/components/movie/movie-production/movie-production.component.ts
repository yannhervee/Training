import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductionCompany } from '../../../../services/interfaces/movieDetails';


@Component({
  selector: 'app-movie-production',
  imports: [CommonModule],
  templateUrl: './movie-production.component.html',
  styleUrl: './movie-production.component.css'
})
export class MovieProductionComponent {
  @Input() productionCompanies!: ProductionCompany [];

}
