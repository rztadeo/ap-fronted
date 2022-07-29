import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { EstudioDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  @Output() cerrar:EventEmitter<boolean> = new EventEmitter<boolean>();
  estudio: EstudioDTO = {} as EstudioDTO;
  @Input() destino: string = "";
  @Input() idPerfil: Number = 0;
  constructor(public mensajero: LeerPerfilService) { }


  ngOnInit(): void {
  }


  public enviar(): void {
    this.estudio.usuario = this.idPerfil;
    const options = {next:()=>{}, error:()=>{}}
    this.mensajero.agregarDatos(this.estudio, this.destino)
    .pipe(finalize(()=>this.cerrar.emit(true)))
    .subscribe(options);
  }

}
