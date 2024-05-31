import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor() { }

  async getPokemonList(offset: number = 0, limit: number = 151): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon`, {
        params: {
          offset: offset,
          limit: limit
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
      throw error;
    }
  }

  async getPokemonDetails(name: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
      throw error;
    }
  }

  async getPokemonSpecies(name: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/pokemon-species/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon species:', error);
      throw error;
    }
  }
}
