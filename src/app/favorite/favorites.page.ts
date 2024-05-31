import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favoritePokemons: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      const favoriteIds = JSON.parse(favorites);
      favoriteIds.forEach((id: number) => {
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((data: any) => {
          this.favoritePokemons.push(data);
        });
      });
    }
  }

  goToDetails(pokemonId: number) {
    this.router.navigate(['/details', pokemonId]);
  }
}
