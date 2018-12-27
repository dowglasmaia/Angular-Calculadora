import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services'  // importo meu service (.. volta um diretorio)

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //injeção de depend. se da dentro do construtor
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

}
