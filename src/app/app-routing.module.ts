import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletosComponent } from './administracion/boletos/boletos.component';
import { NuevoBoletoComponent } from './administracion/boletos/nuevo-boleto/nuevo-boleto.component';
import { NuevoRecorridoComponent } from './administracion/recorridos/nuevo-recorrido/nuevo-recorrido.component';
import { RecorridosComponent } from './administracion/recorridos/recorridos.component';
import { NuevaRutaComponent } from './administracion/rutas/nueva-ruta/nueva-ruta.component';
import { RutasComponent } from './administracion/rutas/rutas.component';

const routes: Routes = [
  {path:'rutas', component: RutasComponent},
  {path:'recorridos', component: RecorridosComponent},
  {path:'boletos', component: BoletosComponent},
  {path:'nuevaRuta', component:NuevaRutaComponent},
  {path:'nuevoRecorrido', component:NuevoRecorridoComponent},
  {path:'nuevoBoleto', component: NuevoBoletoComponent},
  {path:'editarRuta/:id', component:NuevaRutaComponent},
  {path:'editarRecorrido/:id', component:NuevoRecorridoComponent},
  {path:'editarBoleto/:id', component: NuevoBoletoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
