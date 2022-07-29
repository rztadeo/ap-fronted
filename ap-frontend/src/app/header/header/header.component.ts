import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let clave = localStorage.getItem("clave");
    let usuario = localStorage.getItem("usuario");
    console.log(localStorage);
    this.isLogged = (clave ?? '').length > 0 && (usuario ?? '').length > 0;
  }

  login(estado: boolean) {
    this.isLogged = estado;
  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem("clave");
    localStorage.removeItem("usuario");
    this.router.navigate(['home']);
  }

  viewPerfil(){
    let usuario = localStorage.getItem("usuario");
    this.router.navigate(['u', usuario]).then(()=>{location.reload()}).catch(()=>{this.router.navigate(['error'])});   
  }

  editPerfil() {
    let usuario = localStorage.getItem("usuario");
    this.router.navigate(['e', usuario]).then(()=>{location.reload()}).catch(()=>{this.router.navigate(['error'])});
  }
}
