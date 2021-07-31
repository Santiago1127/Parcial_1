import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { IdentificadorComponent } from './identificador/identificador.component';
import { DescripcionCompComponent } from './descripcion-comp/descripcion-comp.component';
import { PorcentajeCompComponent } from './porcentaje-comp/porcentaje-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ListaPersonasComponent,
    DescripcionComponent,
    IdentificadorComponent,
    DescripcionCompComponent,
    PorcentajeCompComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
