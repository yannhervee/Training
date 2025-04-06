import { Component, inject, OnInit } from '@angular/core';
import { Pokedoke } from '../../Interfaces/Pokemon';
import { PokemonService } from '../../Service/pokemon.service';
import { PokemonDetails } from '../../Interfaces/PokemonDetails';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  pokemons = this.pokemonService.pokemonList$;
  
  // pokemons: PokemonDetails[] = [];

  // constructor(private pokemonService: ) {}

  ngOnInit() {
    // this.pokemonService.pokemonList$.subscribe((data) => {
    //   console.log("data ", data)
    //   this.pokemons = data;
    // });

    this.pokemonService.fetchPokemons().subscribe(console.log);
  }
}
