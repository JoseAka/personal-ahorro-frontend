import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-acumulacion-operaciones",
  templateUrl: "./acumulacion-operaciones.component.html",
  styleUrls: ["./acumulacion-operaciones.component.css"],
})
export class AcumulacionOperacionesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  opcionesEntidades: string[] = ["Opción 1", "Opción 2", "Opción 3"];
  entidadSeleccionada: string;

  startDate: Date;
  endDate: Date;

  startValue = 300;
  endValue = 400;

  sliderMin = {
    autoTicks: false,
    disabled: false,
    invert: false,
    max: 100, // VALOR DEL API OPERAIONES
    min: 0, // VALOR DEL API OPERAIONES
    showTicks: true,
    step: 5,
    thumbLabel: true,
    value: 0, // VALOR DEL API OPERAIONES min
    vertical: false,
    tickInterval: 1,
  };

  sliderMax = {
    autoTicks: false,
    disabled: false,
    invert: false,
    max: 100, // VALOR DEL API OPERAIONES
    min: 0, // VALOR DEL API OPERAIONES
    showTicks: true,
    step: 5,
    thumbLabel: true,
    value: 100, // VALOR DEL API OPERAIONES max
    vertical: false,
    tickInterval: 1,
  };

  public collapse = true;

  public collap() {
    this.collapse ? !this.collapse : this.collapse;
  }

  clickSliderMin(event: any) {
    this.sliderMax.min = event.value;
    // this.sliderMax.value = (this.sliderMax.max + this.sliderMax.min) / 2;
    if (this.sliderMax.min != this.sliderMax.max) {
      this.sliderMax.disabled = false;
    } else {
      this.sliderMax.disabled = true;
    }
  }

  clickSliderMax(event: any) {
    if (this.sliderMin.value == this.sliderMax.max) {
      this.sliderMax.disabled = true;
    }
  }

  getSliderTickInterval(): number | "auto" {
    if (this.sliderMin.showTicks) {
      return this.sliderMin.autoTicks ? "auto" : this.sliderMin.tickInterval;
    }

    return 0;
  }

  onRangeChange(event: number[]) {
    // Aquí puedes manejar el evento de cambio de rango
    // event[0] representa el valor inicial y event[1] representa el valor final
    console.log("Rango cambiado:", event[0], event[1]);
  }
}
