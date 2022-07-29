import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { ProyectoDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  proyecto: ProyectoDTO = {} as ProyectoDTO;
  @Output() cerrar:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() destino: string = ""
  @Input() idPerfil: Number = 0;
  constructor(public mensajero: LeerPerfilService) { }


  ngOnInit(): void {
  }


  public enviar(): void {
    this.proyecto.usuario = this.idPerfil;
    const options = {next:()=>{}, error:()=>{}}
    this.mensajero.agregarDatos(this.proyecto, this.destino)
    .pipe(finalize(()=>this.cerrar.emit(true)))
    .subscribe(options);
  }
}
