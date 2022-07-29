import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Input() idPerfil: Number = 0;
  @Input() datos: PersonaDTO[] = [];
  @Input() editable: boolean = false;
  @Output() reloadEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido: any) {
    this.modal.open(contenido)
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
