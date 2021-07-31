import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-descripcion-comp',
  templateUrl: './descripcion-comp.component.html',
  styleUrls: ['./descripcion-comp.component.css']
})
export class DescripcionCompComponent implements OnInit {

  @Input() arregloDescripcionCompNombre: String[] = [];
  
  @Output() borrarDescripcionComp= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  borrarDescripcionCompFn(index:number){
    this.borrarDescripcionComp.emit(index)
  }

}
