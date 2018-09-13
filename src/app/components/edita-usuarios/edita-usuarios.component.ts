import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { FireService } from '../../services/fire.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-edita-usuarios',
  templateUrl: './edita-usuarios.component.html',
  styleUrls: ['./edita-usuarios.component.css']
})
export class EditaUsuariosComponent implements OnInit {
  id: string;
  datos: any = {};
  tarjeta: any = {  };
  fecha = new Date();
  constructor(private route: ActivatedRoute, private _fire: FireService,  private afs: AngularFireDatabase) {
    this.tarjeta = {
      nombre: '',
      fecha_registro: this._fire.formatDay(this.fecha),
      codigo: '',
      correo: ''
    };
    this.route.params.subscribe( parametros => { this.id = parametros['id']; });
    this.getXID();
   }

  ngOnInit() {
  }

  editarUsuario() {
    return this._fire.EditarUsuario(this.tarjeta, this.id).subscribe(data => console.log( data ));
  }

  getXID() {
  return this._fire.getUsuario(this.id).subscribe(data => {
    console.log(data);
    this.datos = data;
  });
  }

}
