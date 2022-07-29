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
  @Output() cerrar:EventEmitter<boolean> = new EventEmitter<boolean>();
  persona: PersonaDTO = {} as PersonaDTO;
  activo: boolean = true;
  @Input() destino: string = ""
  @Input() idPerfil: Number = 0;
  constructor(public mensajero: LeerPerfilService, private guardarImagenes: UploadService) { }


  ngOnInit(): void {
  }

  cargarBg(evento: any){
    let imagen = evento.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imagen);
    reader.onloadstart = ()=>{this.activo = false};
    reader.onloadend = ()=>{
      this.guardarImagenes.subir("perfil_"+this.idPerfil+"_"+Date.now(),reader.result)
      .then((ubicacion:any)=>{
        this.persona.imagenBg = ubicacion;
        this.activo = true;
      }
      )
    }
  }

  public enviar(): void {
    this.persona.usuario = this.idPerfil;
    const options = {next:()=>{}, error:()=>{}}
    this.mensajero.agregarDatos(this.persona, this.destino)
    .pipe(finalize(()=>this.cerrar.emit(true)))
    .subscribe(options);
  }
}
