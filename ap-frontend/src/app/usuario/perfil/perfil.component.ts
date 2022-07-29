import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PerfilDTO } from './interfaces';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent{
@Input() perfil: PerfilDTO={} as PerfilDTO;
@Input() editable: boolean = true;
@Output() reloadEvent:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }
  reload(dato:boolean){
    this.reloadEvent.emit(dato);    
  }
}
