import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BienvenidosComponent } from './components/bienvenidos/bienvenidos.component';
import { HistorialComponent } from './components/historial/historial.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegistradosComponent } from './components/registrados/registrados.component';
import { EditaUsuariosComponent } from './components/edita-usuarios/edita-usuarios.component';



export const ROUTES: Routes = [
    { path: 'bienvenidos', component: BienvenidosComponent },
    {
        path: 'historial', component: HistorialComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: 'registrados', component: RegistradosComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: 'editausuario/:id', component: EditaUsuariosComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: 'registro', component: RegistroComponent,
        canActivate: [ AuthGuardService ]
     },
    { path: 'acercade', component: AcercadeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'bienvenidos' },
    { path: '', pathMatch: 'full', redirectTo: 'bienvenidos' }
];

