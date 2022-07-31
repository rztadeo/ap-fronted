import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { UsuarioDTO } from 'src/app/usuario/perfil/interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  destino: string = "usuarios";
  repeticion: string = "";
  usuario: UsuarioDTO = {} as UsuarioDTO;

  constructor(private modalService: NgbModal,
    public mensajero: LeerPerfilService,
    private router:Router) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    },
      (reason: any) => {
      });
  }
  ngOnInit(): void {
  }

  public enviar() {
    this.checkUsuario();
  }

  private checkUsuario(): void {
    let user: string = this.usuario.nombre;
    let password: string = this.usuario.contra;
    if (user.length >= 5 && user.length < 15 && !(/[^\w]/.test(user))) {
      if (password == this.repeticion) {
        this.mensajero.buscarDatos(user, "usuarios").subscribe(
          (res: any) => {
            if ((res ?? []).length == 0) {
              if (this.checkPassword(password)) {
                const options = {next:()=>{},error:()=>{}};
                this.mensajero.agregarDatos(this.usuario, this.destino)
                .pipe(finalize(
                  ()=>{
                    alert("Usuario creado exitosamente!");
                    this.modalService.dismissAll();
                    this.router.navigate(['home']);
                  }
                ))
                .subscribe(options);
              } else {
                alert("La contraseña debe tener entre 6 y 15 caracteres alfanumericos");
              }
            } else {
              alert("El nombre de usuario ya se encuentra en uso");
            }
          },
          ()=>{}
        )
      } else {
        alert("Ambas contraseñas deben coincidir");
      }

    } else {
      alert("El nombre de usuario debe contener entre 5 y 15 caracteres alfanuméricos.");
    };

  }

  checkPassword(password: string): boolean {
    return !(/[^\w]/.test(password)) && password.length >= 6 && password.length < 16;
  }
}
