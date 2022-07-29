import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrabajoDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  @Input() idPerfil: Number = 0;
  @Input() experiencias: TrabajoDTO[] = [];
  @Input() editable: boolean = true;
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
