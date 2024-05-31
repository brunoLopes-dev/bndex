import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FavoritePageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePageRoutingModule,
    SharedModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}