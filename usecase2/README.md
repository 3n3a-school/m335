# modul-335-ml-usecase2

M335: Musterlösung Übung UseCase2 (Tag5)

## Allgemein / Styling

* Die App soll nach dem Hi-Fi Protoypen gestylt werden, als Farben sind die Defaults zu verwenden
* ~~Für die Daten werden die dazugehörige Firebase API verwendet. Login- & API-Daten sind oben zu entnehmen.~~
* ~~Die Seiten sind im Template bereits erstellt, die Grundnavigation inkl. AngularFireAuthGuards fehlt jedoch im `app-routing.module.ts `~~

## Navigation

* ~~Das Menu soll die im Prototyp ersichtlichen Menüpunkte (Galerie, Ferienorte) haben~~
* Die Menüpunkte sollen die im Prototyp ersichtlichen I~~cons~~ und Farben haben
* ~~Der Titel im Menu soll "Use Case 2" stehen~~
* ~~Am unteren Ende des Menus soll ein Button fürs Logout ersichtlich sein~~
* ~~Klickt ein Benutzer Logout, wird er ausgeloggt und zum Login gesendet, verwende hier den `auth.service.ts`~~

## Willkommen

* ~~Die Willkommensseite soll nur beim ersten App-Start erscheinen. Verwende dazu `Ionic Storage`. Sonst soll das Login kommen (falls nicht eingeloggt)~~
* ~~Auf der Seite ist ein Titel "Willkommen zum UseCase2" ersichtlich, verwende hier ein Grid und `h2` Elemente~~
* ~~Klickt der Benutzer irgendwo hin, soll er zum Login gelangen~~

## Login

* ~~Für das Login soll `auth.service.ts `verwendet werden~~
* ~~Das Login soll mit Email / Passwort und Firebase Auth realisiert werden~~
* ~~Bei einem Klick auf den Login-Button wird überprüft ob etwas eingegeben wurde, nur dann wird ein Login versucht~~
* ~~Bei einem Klick auf den "Account erstellen"-Button soll zur Registrierung-Seite navigiert werden~~
* ~~Gibt es ein Fehler beim Login, soll dieser mittels `ToastController`  angezeigt werden~~

## Registrierung

* ~~Die Registration soll `auth.service.ts `verwenden~~
* ~~Die Registration soll mit Benutzername / Email / Passwort und Firebase Auth realisiert werden, alle Daten sollen gespeichert werden~~
* Bei einem Klick auf den Registrieren-Button wird überprüft ob etwas eingegeben wurde, nur dann wird ein Registration versucht
* ~~Oberhalb des Registrierungs-Buttons gibt es einen Button "Zurück zum Login" mit entsprechender Aktion~~
* ~~Gibt es ein Fehler beim Login, soll dieser mittels `ToastController`  angezeigt werden~~

## Galerie

* Die Galerie-Seite ist nach dem Login die Standardseite
* Die Galerie zeigt Bilder der Firebase Realtime Database an
* Die jeweilige Gruppennummer ist einzuhalten (Bsp. `groupNumber: string = "G1"; `)
* Die Bild-URL soll dabei von der Firebase Realtime Database geladen werden
* Die Bilder sollen in einem Grid dargestellt werden

## Ferienorte

* In einer Liste werden alle in der Firebase Realtime Database vorhanden Ferienorte mit Name angezeigt
* Ich kann ein über den "Plus"-Button in der Navigation einen neuen Ferienort hinzufügen
* Dabei wird ein `AlertController` mit Inputfelder verwendet
* Speichere ich den Datensatz wird dieser der Liste angehängt und in Firebase persistiert
