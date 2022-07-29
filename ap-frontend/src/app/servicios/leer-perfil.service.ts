import { Injectable } from '@angular/core';
import { EstudioDTO, PerfilDTO, SesionDTO, TrabajoDTO } from '../usuario/perfil/interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class LeerPerfilService {
  url: string = "http://localhost:8080/"
  constructor(private http:HttpClient) { }
  
  public traerPerfil(nombre: string){
    let url:string = this.url+"perfil/traer/"+nombre;
    return this.http.get<PerfilDTO>(url);
  }

  public agregarDatos(body: any, destino:String){
    let url:string = this.url+destino+"/crear";
    return this.http.post<any>(url, body);
  }

  public buscarDatos(nombre:any,destino:string){
    let url:string = this.url+destino+"/buscar/"+nombre.toString();
    return this.http.get<TrabajoDTO[]>(url,{});
  }

  public borrarDatos(nombre:any,destino:string){
    let url:string = this.url+destino+"/borrar/"+nombre.toString();
    return this.http.delete<any>(url,{});
  }

  public compararClave(nombre:any){
    let url:string = this.url+"claves/comparar";
    let claveGuardada:string|null = localStorage.getItem("clave");
    let datos: SesionDTO ={usuario: nombre, clave: claveGuardada}
    console.log(datos);
    return this.http.post<SesionDTO>(url,datos);
  }

  public traerClave(nombre:any){
    let url:string = this.url+"claves/traer";
    let datos: SesionDTO = {usuario: nombre, clave:""};
    return this.http.post<SesionDTO>(url, datos);
  }

  public login(sesion:SesionDTO){
    let url:string = this.url+"login";
    return this.http.post<SesionDTO>(url, sesion);

  }
}
