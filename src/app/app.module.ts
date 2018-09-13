import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
/// Angular Firebase /////////
import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// NO
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HistorialComponent } from './components/historial/historial.component';
import { AcercadeComponent } from './components/acercade/acercade.component';


// Rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';


// Servicios
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FireService } from './services/fire.service';
import { KeysPipe } from './pipes/keys.pipe';
import { RegistradosComponent } from './components/registrados/registrados.component';

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditaUsuariosComponent } from './components/edita-usuarios/edita-usuarios.component';

export const firebaseconfig = {
  apiKey: 'AIzaSyCYH4E8_6nasDAscJz4-TgEQb9ekHqXWeg',
  authDomain: 'ddrfid-d05a2.firebaseapp.com',
  databaseURL: 'https://ddrfid-d05a2.firebaseio.com',
  projectId: 'ddrfid-d05a2',
  storageBucket: 'ddrfid-d05a2.appspot.com',
  messagingSenderId: '516530163998'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BienvenidosComponent,
    RegistroComponent,
    HistorialComponent,
    AcercadeComponent,
    KeysPipe,
    RegistradosComponent,
    EditaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:  true}),
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    FireService,
    AngularFireDatabase


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
