import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './inicio/aboutme/aboutme.component';
import { ErrorComponent } from './inicio/error/error.component';
import { HomeComponent } from './inicio/home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'aboutme', component: AboutmeComponent},
  { path: ':mode/:id', component: UsuarioComponent },
  { path: 'error', component: ErrorComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // mandar '.com/' a '.com/home'
  { path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
