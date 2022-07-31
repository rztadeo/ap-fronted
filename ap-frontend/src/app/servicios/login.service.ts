import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SesionDTO } from '../usuario/perfil/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = " https://cryptic-oasis-08352.herokuapp.com/";

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedAs(user: string, ifTrue: ((objeto:any) => void), ifFalse: ((objeto:any) => void),arg:any) {
    let url: string = this.url + "claves/comparar";
    let claveGuardada: string | null = localStorage.getItem("clave");
    let usuarioGuardado: string | null = localStorage.getItem("usuario");
    if (user != usuarioGuardado || claveGuardada == null) {
      ifFalse(arg);
    } else {
      let datos: SesionDTO = { usuario: user, clave: claveGuardada }
      this.http.post<SesionDTO>(url, datos).subscribe(
        (res: SesionDTO) => {
          if (res.usuario == res.clave) {
            ifTrue(arg);
          } else {
            ifFalse(arg);
          }
        },
        (err: Error) => {
          console.log(err.message);
        }
      );
    }

  }
}