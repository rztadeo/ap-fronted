import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstudioDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-academico',
  templateUrl: './academico.component.html',
  styleUrls: ['./academico.component.css']
})
export class AcademicoComponent implements OnInit {
  @Input() editable = false;
  @Input() idPerfil: Number = 0;
  @Input() experiencias: EstudioDTO[] = [];
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
