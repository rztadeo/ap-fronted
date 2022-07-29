import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LeerPerfilService } from '../servicios/leer-perfil.service';
import { LoginService } from '../servicios/login.service';
import { PerfilDTO } from './perfil/interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  perfil: PerfilDTO = {} as PerfilDTO;
  editable: boolean = false;
  private modo: string = this.route.snapshot.params['mode'];
  private nombreUsuario = this.route.snapshot.params['id'];
  private idPerfil: Number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lector: LeerPerfilService,
    private logger: LoginService) { }

  ngOnInit(): void {
    this.tryLogging();
  }

  public reload():void{
    this.tryLogging()
  }

  private inicio() {
    this.lector.traerPerfil(this.nombreUsuario)
      .subscribe(
        (res: PerfilDTO) => {
          if (res.id > 0) {
            this.perfil = res;
            this.idPerfil = res.id;
          } else {
            this.router.navigate(['error']);
          }
        }
      )
  }

  private tryLogging() {
    this.logger.isLoggedAs(this.nombreUsuario, this.permitirAcceso, this.negarAccesso, this);
  }

  private permitirAcceso(usuario: UsuarioComponent): void {
    if (usuario.modo == 'e') {
      usuario.editable = true;
      usuario.inicio();
    } else if (usuario.modo == "u") {
      usuario.editable = false;
      usuario.inicio();
    } else {
      usuario.router.navigate(['error']);
    }
  }

  private negarAccesso(usuario: UsuarioComponent): void {
    if (usuario.modo == "u") {
      usuario.editable = false;
      usuario.inicio();
    } else {
      usuario.router.navigate(['error']);
    }
  }
}

