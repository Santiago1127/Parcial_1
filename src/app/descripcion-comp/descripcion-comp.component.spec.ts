import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionCompComponent } from './descripcion-comp.component';

describe('DescripcionCompComponent', () => {
  let component: DescripcionCompComponent;
  let fixture: ComponentFixture<DescripcionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
