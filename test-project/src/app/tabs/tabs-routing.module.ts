import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m=>m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/gallery',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/gallery',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
