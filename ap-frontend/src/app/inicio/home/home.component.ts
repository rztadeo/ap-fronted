import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let clave = localStorage.getItem("clave");
    let usuario = localStorage.getItem("usuario");
    console.log(localStorage);
    if (clave != null && usuario != null) {
      if (clave.length > 0) {
        this.router.navigate(['u', usuario]);
      }
    }

  }
}