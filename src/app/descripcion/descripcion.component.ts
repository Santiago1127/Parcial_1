import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  @Input() arregloDescripcionNombre: String[] = [];
  
  @Output() borrarDescripcion= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  borrarDescripcionFn(index:number){
    this.borrarDescripcion.emit(index)
  }

}
