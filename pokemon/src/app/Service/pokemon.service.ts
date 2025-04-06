import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, forkJoin, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { PokemonEntry, PokemonsResponse } from '../Interfaces/PokemonResponse';
import { PokemonDetails, Type, Type2 } from '../Interfaces/PokemonDetails';
import { Pokedoke } from '../Interfaces/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  // private pokemonListSubject = new BehaviorSubject<PokemonDetails[]>([]);
  // pokemonList$ = this.pokemonListSubject.asObservable();

  pokemonList$ = signal<PokemonDetails[]>([]);

  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  private readonly pokedexUrl = 'pokedex/kanto';
  private readonly pokemonUrl = 'pokemon';
  private typelist = new Set(['fire', 'grass', 'water']);

  constructor(private http: HttpClient) {}

  fetchPokemons(begin = 0, end = 20) {
    return this.http
      .get<PokemonsResponse>(`${this.baseUrl}/${this.pokedexUrl}`)
      .pipe(
        map((response) => {
          console.log('response ', response);
          return response.pokemon_entries.slice(begin, end);
        }),
        switchMap((data: PokemonEntry[]) => {
          return this.fetchAllPokemonEntity(data);
        }),
        map((pokemonDetails: PokemonDetails[]) => {
          return this.findSpecificType(this.typelist, pokemonDetails)
        }),
        tap((data: PokemonDetails[]) => {
          // this.pokemonListSubject.next(data);
          this.pokemonList$.set(data);
        })
      );
  }
  private fetchAllPokemonEntity(data: PokemonEntry[]) {
    const names = data.map((item: PokemonEntry) => item.pokemon_species.name);
    // ['1', '2', '3'...]
    return forkJoin(
      names.map((name) => {
        return this.fetchSinglePokemons(name);
      })
    ); // [details...]
  }
  private fetchSinglePokemons(name: string) {
    return this.http.get<PokemonDetails>(
      `${this.baseUrl}/${this.pokemonUrl}/${name}`
    );
  }
  private findSpecificType(types: Set<string>, pokemons: PokemonDetails[]) {
    return pokemons.filter((p: PokemonDetails) => {
      return p.types.some((t: Type) => types.has(t.type.name));
    });
  } // find target types
}
