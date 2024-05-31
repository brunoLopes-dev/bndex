import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  favorites: Set<number> = new Set<number>();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
    this.loadFavorites();
  }

  loadPokemons() {
    for (let i = 1; i <= 151; i++) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe((data: any) => {
        this.pokemons.push(data);
      });
    }
  }

  goToDetails(pokemonId: number) {
    this.router.navigate(['/details', pokemonId]);
  }

  toggleFavorite(pokemon: any, event: Event) {
    event.stopPropagation();
    if (this.isFavorite(pokemon)) {
      this.favorites.delete(pokemon.id);
    } else {
      this.favorites.add(pokemon.id);
    }
    this.saveFavorites();
  }

  isFavorite(pokemon: any): boolean {
    return this.favorites.has(pokemon.id);
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = new Set<number>(JSON.parse(favorites));
    }
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(Array.from(this.favorites)));
  }
}
