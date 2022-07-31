import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private router: Router, private mensajero: LeerPerfilService) { }

  ngOnInit(): void {
    let clave = localStorage.getItem("clave");
    let usuario = localStorage.getItem("usuario");
    console.log(localStorage);
    this.isLogged = (clave ?? '').length > 0 && (usuario ?? '').length > 0;
  }

  login(estado: boolean) {
    this.isLogged = estado;
  }

  logout():void {
    this.isLogged = false;
    localStorage.removeItem("clave");
    localStorage.removeItem("usuario");
    this.router.navigate(['home']);
  }

  deleteProfile(){
    let usuario = localStorage.getItem("usuario");
    const options = {next: ()=>{},error: ()=>{}};
    if (confirm("Tu cuenta será eliminada.\n Esta acción no se puede deshacer. \n ¿Estas de acuerdo con esto?")){
      this.mensajero.borrarDatos(usuario,"perfil").pipe(finalize(()=>{this.logout()})).subscribe(options);
    }
  }

  viewPerfil(){
    let usuario = localStorage.getItem("usuario");
    this.router.navigate(['u', usuario]).then(()=>{location.reload()}).catch(()=>{this.router.navigate(['error'])});   
  }

  editPerfil() {
    let usuario = localStorage.getItem("usuario");
    this.router.navigate(['e', usuario]).then(()=>{location.reload()}).catch(()=>{this.router.navigate(['error'])});
  }

  aboutMe(){
    this.router.navigate(['aboutme']);
  }
}
