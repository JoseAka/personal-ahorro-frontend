import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  dataCabecera = [
    {
      primaria: {
        key: "acumulacionOperaciones",
        value: "ACUMULACIÓN OPERACIONES",
      },
      secundaria: [],
    },
    {
      primaria: {
        key: "tablas",
        value: "TABLAS",
      },
      secundaria: [],
    },
    {
      primaria: {
        key: "#",
        value: "GRÁFICAS",
      },
      secundaria: [
        {
          primaria: {
            key: "graficasColumnas",
            value: "COLUMNAS",
          },
          secundaria: [],
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(router) {
    this.router.navigate([router]);
  }

  navigateToAcumulacionOperaciones() {
    this.router.navigate(["acumulacionOperaciones"]);
  }

  navigateToTablas() {
    this.router.navigate(["tablas"]);
  }

  navigateToGraficasColumnas() {
    this.router.navigate(["graficasColumnas"]);
  }
}
