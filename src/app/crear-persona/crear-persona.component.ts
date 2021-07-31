import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  [x: string]: any;
  
  public nombre: string =""
  public competenciasNombre: string[]=[]

  public nombreDes: string =""
  public descripcionNombre: string[]=[]
  
  public nombreIde: string =""
  public identificadorNombre: string[]=[]

  public nombreDesComp: string =""
  public descripcionCompNombre: string[]=[]

  public nombrePorComp: string =""
  public porcentajeCompNombre: string[]=[]


  constructor() { }

  ngOnInit(): void {
  }

  //------------------------------------------------------------------------------------------------------------------
  agregarCompetencia(){
    this.competenciasNombre.push(this.nombre)
    this.nombre = ""
  }

  borrarNombre(index: number){
    this.competenciasNombre.splice(index,1)
  }

  //------------------------------------------------------------------------------------------------------------------
  agregarDescripcion(){
    this.descripcionNombre.push(this.nombreDes)
    this.nombreDes = ""
  }

  borrarNombreDescripcion(index: number){
    this.descripcionNombre.splice(index,1)
  }

  //------------------------------------------------------------------------------------------------------------------
  agregarIdentificador(){
    this.identificadorNombre.push(this.nombreIde)
    this.nombreIde = ""
  }

  borrarNombreIdentificador(index: number){
    this.identificadorNombre.splice(index,1)
  }

  //------------------------------------------------------------------------------------------------------------------
  agregarDescripcionComp(){
    this.descripcionCompNombre.push(this.nombreDesComp)
    this.nombreDesComp = ""
  }

  borrarNombreDescripcionComp(index: number){
    this.descripcionCompNombre.splice(index,1)
  }

  //------------------------------------------------------------------------------------------------------------------
  agregarPorcentajeComp(){
    this.porcentajeCompNombre.push(this.nombrePorComp)
    this.nombrePorComp = ""
  }

  borrarNombrePorcentajeComp(index: number){
    this.porcentajeCompNombre.splice(index,1)
  }
}
