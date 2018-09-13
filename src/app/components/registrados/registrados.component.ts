import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';


@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.css']
})
export class RegistradosComponent implements OnInit {
  datos: any[] = [];
  loading = true;
  constructor(private _fire: FireService) {
    this.getTodo();
  }

  getTodo() {
    this._fire.getRegistro().subscribe(data => {
      //  console.log(data);
      this.loading = false;
       this.datos = data;
      });
  }

  ngOnInit() {
  }

  borraHeroe( key: string ) {
    this._fire.borrarUsuario( key )
    .subscribe( respuesta => {
      if (respuesta) {
      console.error( respuesta );
      } else {
      delete this.datos[ key ];
      this.getTodo();
      }
    });
   }


}
