import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import {
  IonicModule,
  IonicRouteStrategy,
  MenuController,
} from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LogoutComponent } from "./logout/logout.page";

// Import für Ionic Storage
import { IonicStorageModule } from "@ionic/storage-angular";

// Import @angular/fire importieren
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
// TODO: Firebase Einstellungen von environments laden

// TODO: Guard für Willkommensseite importieren & zu providers hinzufügen

@NgModule({
  declarations: [AppComponent, LogoutComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    // TODO: Firebase-Imports hinzufügen
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuthGuard,
    // TODO: Willkommens-Guard hinzufügen
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private menuCtrl: MenuController) {}
}
