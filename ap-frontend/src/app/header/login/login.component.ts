import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { SesionDTO } from 'src/app/usuario/perfil/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion: SesionDTO = {} as SesionDTO;
  @Output() salidaEvento = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal, public mensajero: LeerPerfilService, private router: Router) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log("aca");
    },
  (reason:any)=>{});
  }
  ngOnInit(): void {
  }

  public ingresar(): void {
    this.mensajero.login(this.sesion).subscribe(
      (res: any) => {
        let nuevaClave: string = res.clave;
        if (nuevaClave.length > 0) {
          localStorage.setItem("usuario", res.usuario);
          localStorage.setItem("clave", nuevaClave);
          this.salidaEvento.emit(true);
          this.modalService.dismissAll();
          this.router.navigate(['u', res.usuario]);
        } else {
          alert("Los datos ingresados no son correctos");
        }
      }
    )

  }

}
