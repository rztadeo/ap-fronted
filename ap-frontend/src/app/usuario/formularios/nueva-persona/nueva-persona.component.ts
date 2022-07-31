import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { UploadService } from 'src/app/servicios/upload.service';
import { PersonaDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() persona: PersonaDTO = {} as PersonaDTO;
  activo: boolean = true;
  readerBg: FileReader = new FileReader();
  readerPf: FileReader = new FileReader();
  @Input() destino: string = ""
  @Input() idPerfil: Number = 0;
  constructor(public mensajero: LeerPerfilService, private guardarImagenes: UploadService) { }


  ngOnInit(): void {
    if (this.persona==undefined){
      this.persona = {} as PersonaDTO;
    }
  }

  cargarImg(evento: any, reader: FileReader) {
    let imagen = evento.target.files[0];
    reader.readAsDataURL(imagen);
    reader.onloadstart = () => { this.activo = false };
    reader.onloadend = () => { this.activo = true };
  }

  public enviar(): void {
    this.activo = false;
    this.persona.usuario = this.idPerfil;
    const options = { next: () => { }, error: () => { } };
    if (this.readerBg.result == null && this.readerPf.result == null) {
      this.enviarDatos(options);
    } else if (this.readerPf.result == null) {
      this.guardarImagenes.borrar(this.persona.imagenBg).then(() => {
        this.guardarImagenes.subir("background_" + this.idPerfil + "_" + Date.now(),
          this.readerBg.result)
          .then((ubicacion: any) => {
            this.persona.imagenBg = ubicacion;
            this.enviarDatos(options);
          }
          )
      })
    } else if (this.readerBg.result == null) {

      this.guardarImagenes.borrar(this.persona.imagenPerfil).then(() => {
        this.guardarImagenes.subir("perfil_" + this.idPerfil + "_" + Date.now(),
          this.readerPf.result)
          .then((ubicacion: any) => {
            this.persona.imagenPerfil = ubicacion;
            this.enviarDatos(options);
          }
          )
      })
    } else {
      this.guardarImagenes.borrar(this.persona.imagenPerfil).then(() => {
        this.guardarImagenes.borrar(this.persona.imagenBg).then(() => {
          this.guardarImagenes.subir("perfil_" + this.idPerfil + "_" + Date.now(),
            this.readerPf.result).then(
              (ubicacion: any) => {
              this.persona.imagenPerfil = ubicacion;
              this.guardarImagenes.subir("background" + this.idPerfil + "_" + Date.now(),
                this.readerBg).then(
                  (resultado: any) => {
                  this.persona.imagenBg = resultado;
                  this.enviarDatos(options);
                })
            })
        })
      })
    }
  }


  private enviarDatos(options: any) {
    this.mensajero.agregarDatos(this.persona, this.destino)
      .pipe(finalize(() => {
        this.cerrar.emit(true);
      }))
      .subscribe(options);
  }
}
