import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultadoSuma = new EventEmitter<number>();

  operandoA: number = 0;
  operandoB: number = 0;

  sumar():void{
    let resultado = this.operandoA + this.operandoB
    this.resultadoSuma.emit(resultado)
  }
}
