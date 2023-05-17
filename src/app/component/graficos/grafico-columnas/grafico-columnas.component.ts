import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-columnas',
  templateUrl: './grafico-columnas.component.html',
  styleUrls: ['./grafico-columnas.component.css']
})
export class GraficoColumnasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['A', 'B', 'C', 'D', 'E'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [10, 24, 15, 7, 12], label: '€' }
  ];
}
