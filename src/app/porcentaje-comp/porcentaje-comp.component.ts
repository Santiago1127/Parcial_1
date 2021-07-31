import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-porcentaje-comp',
  templateUrl: './porcentaje-comp.component.html',
  styleUrls: ['./porcentaje-comp.component.css']
})
export class PorcentajeCompComponent implements OnInit {

  @Input() arregloPorcentajeCompNombre: String[] = [];
  
  @Output() borrarPorcentajeComp= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  borrarPorcentajeCompFn(index:number){
    this.borrarPorcentajeComp.emit(index)
  }

}
