import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { SkillDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() destino: string = "";
  @Input() editable: boolean = false;
  @Input() exp: SkillDTO = {} as SkillDTO;
  @Input() editMode: boolean = false;
  @Output() reloadEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

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
