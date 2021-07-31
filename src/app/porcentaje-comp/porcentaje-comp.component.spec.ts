import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeCompComponent } from './porcentaje-comp.component';

describe('PorcentajeCompComponent', () => {
  let component: PorcentajeCompComponent;
  let fixture: ComponentFixture<PorcentajeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
