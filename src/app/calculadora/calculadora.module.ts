import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; //importa o componete
import { CalculadoraService } from './services'; // importo meu service

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ],

  //// importo meu service para ser utilizado e injetado em outros lugares
  providers:[
    CalculadoraService

  ]
})
export class CalculadoraModule { }
