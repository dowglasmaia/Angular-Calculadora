import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; //importa o componete

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ]
})
export class CalculadoraModule { }
