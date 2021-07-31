import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-identificador',
  templateUrl: './identificador.component.html',
  styleUrls: ['./identificador.component.css']
})
export class IdentificadorComponent implements OnInit {

  @Input() arregloIdentificadorNombre: String[] = [];
  
  @Output() borrarIdentificador= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  borrarIdentificadorFn(index:number){
    this.borrarIdentificador.emit(index)
  }

}
