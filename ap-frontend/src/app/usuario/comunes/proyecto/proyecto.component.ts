import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { LeerPerfilService } from 'src/app/servicios/leer-perfil.service';
import { ProyectoDTO } from '../../perfil/interfaces';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Output() reload:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() editable: boolean = false;
  @Input() exp: ProyectoDTO = {} as ProyectoDTO;
  @Input() editMode: boolean = false;
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
