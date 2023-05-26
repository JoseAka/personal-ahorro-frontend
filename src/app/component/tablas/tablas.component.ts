import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableCabecera = [
    {name: "Ingreso fijo"},
    {name: "Ingreso variable"},
    {name: "Inversion"},
    {name: "Gasto fijo"},
    {name: "Gasto variable"},
  ];

  tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 40 },
  ];
}
