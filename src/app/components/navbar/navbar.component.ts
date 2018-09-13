import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FireService } from '../../services/fire.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { filter } from 'rxjs/operators';
import * as _ from 'lodash';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  banderaComp: any;
  banderaEstado: any[] = [];
  prueba: Object = {};
  fecha = new Date();


  constructor( private auth: AuthService, private _fire: FireService, private afs: AngularFireDatabase) {
    auth.handleAuthentication();
    setInterval(() => { this.getNodo(); }, 500);
    this.prueba = {
      codigo: '',
      correo: '',
      fecha_registro: '',
      nombre: '',
      hora: this._fire.formatDay(this.fecha)
  };
   }


  ngOnInit() {
  }

   getNodo() {
    this._fire.getNodo().subscribe(data => {
      // console.log(data);
      this.banderaComp = data;
      this.getData();
        });
  }

  getData() {
    this.afs.list(  '/Registro', {
    query: {
      orderByChild: 'codigo',
      equalTo: this.banderaComp
    }
    }).subscribe(data => {
      this.banderaEstado = data;
      // console.log(data);
      for ( const i of data ) {
        this.prueba['fecha_registro'] = i.fecha_registro;
        this.prueba['correo'] = i.correo;
        this.prueba['codigo'] = i.codigo;
        this.prueba['nombre'] = i.nombre;
      }
      this.putEstado();
    }
    );
  }

  putEstado()  {
  if (this.banderaEstado.length === 0) {
    this._fire.postestado(0).subscribe();
    this._fire.postMessage('0').subscribe();
  // console.log('Tarjeta NO Registrada');
  } else {
    this._fire.postestado(1).subscribe(data => {
    // console.log( data );
    this.afs.list('/Historial').push(this.prueba);
    this._fire.postMessage('0').subscribe();
    });
  }
  }



  login( ) {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
