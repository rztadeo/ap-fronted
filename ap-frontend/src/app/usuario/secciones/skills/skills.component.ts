import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() idPerfil: Number = 0;
  @Input() experiencias: SkillDTO[]=[];
  @Input() editable: boolean = false;
  @Output() reloadEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private modal: NgbModal) { }

  open(contenido: any) {
    this.modal.open(contenido).result.then((res:any)=>{},(rea:any)=>{})
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
