import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { CuerpoPaginaComponent } from './cuerpo-pagina/cuerpo-pagina.component';
import { RutasComponent } from './administracion/rutas/rutas.component';
import { RecorridosComponent } from './administracion/recorridos/recorridos.component';
import { BoletosComponent } from './administracion/boletos/boletos.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NuevaRutaComponent } from './administracion/rutas/nueva-ruta/nueva-ruta.component';
import { NuevoRecorridoComponent } from './administracion/recorridos/nuevo-recorrido/nuevo-recorrido.component';
import { NuevoBoletoComponent } from './administracion/boletos/nuevo-boleto/nuevo-boleto.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiePaginaComponent,
    CuerpoPaginaComponent,
    RutasComponent,
    RecorridosComponent,
    BoletosComponent,
    NuevaRutaComponent,
    NuevoRecorridoComponent,
    NuevoBoletoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
