import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

import { AngularMaterialModule } from "./modulos/angular-material/angular-material.module";

import { AppComponent }     from './app.component';
import { InicioComponent }  from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
