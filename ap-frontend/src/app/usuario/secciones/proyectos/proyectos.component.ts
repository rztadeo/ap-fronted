import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectoDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() idPerfil: Number =0;
  @Input() experiencias: ProyectoDTO[]=[];
  @Input() editable: boolean = false;
  @Output() reloadEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modal: NgbModal) { }

  open(contenido: any) {
    this.modal.open(contenido)
  }
  ngOnInit(): void {
  }

  close(dato:boolean){
    this.modal.dismissAll();
    location.reload();
  }

  reload(dato:boolean){
    if (dato){this.modal.dismissAll()}
    this.reloadEvent.emit(dato);
  }
}
