import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { HomeComponent } from './inicio/home/home.component';
import { LoginComponent } from './header/login/login.component';
import { PersonalComponent } from './usuario/secciones/personal/personal.component';
import { LaboralComponent } from './usuario/secciones/laboral/laboral.component';
import { AcademicoComponent } from './usuario/secciones/academico/academico.component';
import { ProyectosComponent } from './usuario/secciones/proyectos/proyectos.component';
import { SkillsComponent } from './usuario/secciones/skills/skills.component';
import { ExperienciaComponent } from './usuario/comunes/experiencia/experiencia.component';
import { SkillComponent } from './usuario/comunes/skill/skill.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ErrorComponent } from './inicio/error/error.component';
import { RegistroComponent } from './header/registro/registro.component';
import { NuevaExperienciaComponent } from './usuario/formularios/nueva-experiencia/nueva-experiencia.component';
import { HeaderComponent } from './header/header/header.component';
import { NuevaSkillComponent } from './usuario/formularios/nueva-skill/nueva-skill.component';
import { NuevoProyectoComponent } from './usuario/formularios/nuevo-proyecto/nuevo-proyecto.component';
import { NuevaPersonaComponent } from './usuario/formularios/nueva-persona/nueva-persona.component';
import { ProyectoComponent } from './usuario/comunes/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HomeComponent,
    LoginComponent,
    PersonalComponent,
    LaboralComponent,
    AcademicoComponent,
    ProyectosComponent,
    SkillsComponent,
    ExperienciaComponent,
    SkillComponent,
    UsuarioComponent,
    ErrorComponent,
    RegistroComponent,
    NuevaExperienciaComponent,
    HeaderComponent,
    NuevaSkillComponent,
    NuevoProyectoComponent,
    NuevaPersonaComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
