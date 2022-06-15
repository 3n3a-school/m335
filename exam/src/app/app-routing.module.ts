import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    AngularFireAuthGuard,
    redirectUnauthorizedTo,
    redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';

import { WillkommenGuard } from './_guards/willkommen.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);

const routes: Routes = [
    {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full',
    },
    {
        path: 'willkommen',
        loadChildren: () =>
            import('./willkommen/willkommen.module').then(
                (m) => m.WillkommenPageModule
            ),
        canLoad: [WillkommenGuard],
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.module').then((m) => m.LoginPageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToRoot }
    },
    {
        path: 'registrierung',
        loadChildren: () =>
            import('./registrierung/registrierung.module').then(
                (m) => m.RegistrierungPageModule
            ),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToRoot }
    },
    {
        path: 'news',
        loadChildren: () =>
            import('./news/news.module').then((m) => m.NewsPageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'news-detail',
        loadChildren: () =>
            import('./news-detail/news-detail.module').then(
                (m) => m.NewsDetailPageModule
            ),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'chat',
        loadChildren: () =>
            import('./chat/chat.module').then((m) => m.ChatPageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
