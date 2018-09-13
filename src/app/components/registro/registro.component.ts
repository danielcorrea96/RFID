import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  tarjeta: any = {  };
  fecha = new Date();
  banderacorreo: any[] = [];
  banderac: any = false;
  banderacodigo: any[] = [];
  banderaco: any = false;
    constructor(private _fire: FireService, private afs: AngularFireDatabase) {
    this.tarjeta = {
      nombre: '',
      fecha_registro: this._fire.formatDay(this.fecha),
      codigo: '',
      correo: ''
    };

  }

  ngOnInit() {
  }


  guardar() {

    this.afs.list('/Registro', {
      query: {
        orderByChild: 'codigo',
        equalTo: this.tarjeta['codigo']
          }
      }).subscribe(data => {
        console.log(data);
        this.banderacodigo  = data;
      });
      
        setTimeout(() => {
          if ( this.banderacodigo.length === 1) {
            this.banderaco  = true;
            console.log('no post');
    
          } else {
            this._fire.nuevoRegistro(this.tarjeta).subscribe( data2 => console.log(data2));
    
            console.log('post');
    
          }
            
        }, 2000);
    
      



  }

}
