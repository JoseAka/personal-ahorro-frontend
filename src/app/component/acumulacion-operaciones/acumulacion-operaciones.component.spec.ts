import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumulacionOperacionesComponent } from './acumulacion-operaciones.component';

describe('AcumulacionOperacionesComponent', () => {
  let component: AcumulacionOperacionesComponent;
  let fixture: ComponentFixture<AcumulacionOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcumulacionOperacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumulacionOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
