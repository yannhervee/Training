import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './Components/pokemon/pokemon.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon';
}
