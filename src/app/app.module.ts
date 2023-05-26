import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoColumnasComponent } from './component/graficos/grafico-columnas/grafico-columnas.component';
import { ChartsModule } from 'ng2-charts';
import { TablasComponent } from './component/tablas/tablas.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AcumulacionOperacionesComponent } from './component/acumulacion-operaciones/acumulacion-operaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoColumnasComponent,
    TablasComponent,
    HeaderComponent,
    HomeComponent,
    AcumulacionOperacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
