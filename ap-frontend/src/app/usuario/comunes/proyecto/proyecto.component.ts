import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { ProyectoDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Output() reloadEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() editable: boolean = false;
  @Input() exp: ProyectoDTO = {} as ProyectoDTO;
  @Input() editMode: boolean = false;
  @Input() destino: string = '';

  constructor(public mensajero: LeerPerfilService, private modal: NgbModal) { }

  ngOnInit(): void {
  }
  open(contenido: any) {
    this.modal.open(contenido)
  }

  reload(dato:boolean){
    if (dato){this.modal.dismissAll()}
    this.reloadEvent.emit(dato);
  }
  public borrar(): void {
    const options = {next:()=>{},error:()=>{}};
  
    this.mensajero.borrarDatos(this.exp.id, this.destino).pipe(
      finalize(()=>this.reloadEvent.emit(false))
    )
    .subscribe(options);
  }

  

}
