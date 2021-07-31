import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  @Input() arregloCompetenciasNombre: String[] = [];
  
  @Output() borrarPersona= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  borrarPersonaFn(index:number){
    this.borrarPersona.emit(index)
  }

}
