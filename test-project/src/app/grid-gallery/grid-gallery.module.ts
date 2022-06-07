import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridGalleryPageRoutingModule } from './grid-gallery-routing.module';

import { GridGalleryPage } from './grid-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridGalleryPageRoutingModule
  ],
  declarations: [GridGalleryPage]
})
export class GridGalleryPageModule {}
