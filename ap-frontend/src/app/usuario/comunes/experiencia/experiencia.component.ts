import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { EstudioDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() exp: EstudioDTO = {} as EstudioDTO;
  @Input() editMode: boolean = false; //¿Estoy editando?
  @Input() editable: boolean = false; //¿Se puede editar?
  @Input() destino: string = '';
  constructor(public mensajero: LeerPerfilService) { }

  ngOnInit(): void {
  }

  public borrar(): void {
    const options = {next:()=>{},error:()=>{}};
  
    this.mensajero.borrarDatos(this.exp.id, this.destino).pipe(
      finalize(()=>this.reload.emit(false))
    )
    .subscribe(options);
  }
}
