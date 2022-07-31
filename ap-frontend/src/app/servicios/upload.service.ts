import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  path = firebase.app().storage().ref();
  constructor() { }

  async borrar(nombreViejo:string){
    try {
      if (nombreViejo!="" && nombreViejo != null){
        await this.path.child("personal"+nombreViejo).delete();
        }
    } catch {
    }
  }

  async subir(nombreNuevo:string, data:any){
    try{
      let ubicacion = await this.path
      .child("personal/"+nombreNuevo).putString(data,'data_url');
      return await ubicacion.ref.getDownloadURL();
    } catch {
      return null;
    }

  }
}