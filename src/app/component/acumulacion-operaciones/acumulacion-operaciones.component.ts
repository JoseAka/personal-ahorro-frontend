import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acumulacion-operaciones',
  templateUrl: './acumulacion-operaciones.component.html',
  styleUrls: ['./acumulacion-operaciones.component.css']
})
export class AcumulacionOperacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
