import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridGalleryPage } from './grid-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GridGalleryPage
  },
  {
    path: 'view',
    loadChildren: () => import('../image-viewer/image-viewer.module').then( m => m.ImageViewerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridGalleryPageRoutingModule {}
