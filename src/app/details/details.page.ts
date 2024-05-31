import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemonName: string = '';
  pokemonDetails: any;
  pokemonSpecies: any;
  currentId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
    this.loadPokemonDetails(this.pokemonName);
  }

  loadPokemonDetails(name: string) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`).subscribe((data: any) => {
      this.pokemonDetails = data;
      this.currentId = data.id;
      this.loadPokemonSpecies(data.species.url);
    });
  }

  loadPokemonSpecies(url: string) {
    this.http.get(url).subscribe((data: any) => {
      this.pokemonSpecies = data;
    });
  }

  navigateToPrevious() {
    if (this.currentId > 1) {
      this.router.navigate(['/details', this.currentId - 1]);
    }
  }

  navigateToNext() {
    if (this.currentId < 151) {
      this.router.navigate(['/details', this.currentId + 1]);
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
