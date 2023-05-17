import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoColumnasComponent } from './component/graficos/grafico-columnas/grafico-columnas.component';
import { ChartsModule } from 'ng2-charts';
import { TablasComponent } from './component/tablas/tablas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoColumnasComponent,
    TablasComponent,

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
