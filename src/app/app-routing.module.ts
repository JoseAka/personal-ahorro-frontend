import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablasComponent } from './component/tablas/tablas.component';
import { GraficoColumnasComponent } from './component/graficos/grafico-columnas/grafico-columnas.component';
import { HomeComponent } from './component/home/home.component';
import { AcumulacionOperacionesComponent } from './component/acumulacion-operaciones/acumulacion-operaciones.component';

const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'tablas', component: TablasComponent},
 { path: 'graficasColumnas', component: GraficoColumnasComponent},
 { path: 'acumulacionOperaciones', component: AcumulacionOperacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
