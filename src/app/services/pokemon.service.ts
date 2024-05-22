import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  public getPokemons(limit: number = 20, offset: number = 0) {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  public getPokemonDetail(id: string) {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }
}

