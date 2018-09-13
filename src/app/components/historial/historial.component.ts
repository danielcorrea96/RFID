import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

  datos2: any[] = [];
  fecha = new Date ();
  loading = true;
  constructor(private _fire: FireService) {

    this._fire.getHistorial().subscribe(data => {
      console.log(data);
      this.loading = false;
      this.datos2 = data;
    });
  }



}
