import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { SkillDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillComponent implements OnInit {
  @Output() cerrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  skill: SkillDTO = {} as SkillDTO;
  @Input() destino: string = ""
  @Input() idPerfil: Number = 0;
  constructor(public mensajero: LeerPerfilService) { }


  ngOnInit(): void {
  }


  public enviar(): void {
    this.skill.usuario = this.idPerfil;
    const options = {next:()=>{}, error:()=>{}}
    this.mensajero.agregarDatos(this.skill, this.destino)
    .pipe(finalize(()=>this.cerrar.emit(true)))
    .subscribe(options);
  }

}
