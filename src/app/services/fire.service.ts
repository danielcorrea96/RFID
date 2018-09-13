import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FireService {
  // target: FirebaseListObservable<any[]>;
  fireURL = 'https://ddrfid-d05a2.firebaseio.com/';
  mesagge = 'https://ddrfid-d05a2.firebaseio.com/message.json';
  fireURL2 = 'https://ddrfid-d05a2.firebaseio.com/Registro.json';
  estado = 'https://ddrfid-d05a2.firebaseio.com/estado.json';
  estado2 = 'https://ddrfid-d05a2.firebaseio.com/estado2.json';
  Historial = 'https://ddrfid-d05a2.firebaseio.com/Historial.json';
  PutDeleteURL = 'https://ddrfid-d05a2.firebaseio.com/Registro/';
  estadodeLogin = 'https://ddrfid-d05a2.firebaseio.com/estadoLogin.json';

  constructor(private http: Http) {
    console.log( 'hola desde servi');
  }

  nuevoRegistro ( registro: any ) {
    const body = JSON.stringify( registro );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    return this.http.post( this.fireURL2,  body, {headers}).pipe(map( res => {
      // console.log( res.json() );
      return res.json();
    }));
    }

    putestadoLogin(login: any) {
      const body = JSON.stringify( login );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    return this.http.put( this.estadodeLogin,  body, {headers}).pipe(map( res => {
      // console.log( res.json() );
      return res.json();
    }));
    }

    getEstadoLogin() {
      return this.http.get(this.estadodeLogin).pipe(map(res => {
        return res.json();
      }));
    }

    postestado( registro: any ) {
      const body = JSON.stringify( registro );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    return this.http.put( this.estado,  body, {headers}).pipe(map( res => {
      // console.log( res.json() );
      return res.json();
    }));
    }

    postestado2( registro: any ) {
      const body = JSON.stringify( registro );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    return this.http.put( this.estado2,  body, {headers}).pipe(map( res => {
      // console.log( res.json() );
      return res.json();
    }));
    }
    getestado() {
      return this.http.get(this.estado).pipe(map(res => {
        return res.json();
      }));
    }

    postMessage( registro: any ) {
      const body = JSON.stringify( registro );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    return this.http.put( this.mesagge,  body, {headers}).pipe(map( res => {
      // console.log( res.json() );
      return res.json();
    }));
    }

    getNodo() {
      return this.http.get(this.mesagge).pipe(map(res => res.json()));
    }

   getRegistro() {
    return this.http.get(this.fireURL2).pipe(map( res => res.json()));
   }

   getHistorial () {
    return this.http.get(this.Historial).pipe(map( res => res.json()));
   }

   formatDay(date: Date) {
    const full = date.getTime();
    return `${full}`;
      }

    EditarUsuario(usuario: any , key$: string) {
    const body = JSON.stringify( usuario );
    const headers = new Headers ( {
        'Content-Type': 'application/json'
    });
    const url = `${ this.PutDeleteURL }/${ key$ }.json`;
    return this.http.put( url ,  body, {headers}).pipe(map( res => {
      console.log( res.json() );
      return res.json();
    }));
  }

  getUsuario(key$: string) {
  const url = `${ this.PutDeleteURL }/${ key$ }.json`;
  return this.http.get( url ).pipe(map( res => res.json() ));
  }

  borrarUsuario (key: string) {
    const url = `${ this.PutDeleteURL }/${ key }.json`;
    return this.http.delete( url ).pipe(map( res => res.json()));
    }

}
