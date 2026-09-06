import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  operacion: string = '';

  sumar() {
    this.resultado = this.numero1 + this.numero2;
    this.operacion = 'Suma';
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
    this.operacion = 'Resta';
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
    this.operacion = 'Multiplicación';
  }

  dividir() {
    if (this.numero2 === 0) {
      this.operacion = 'Error: no se puede dividir entre 0';
      this.resultado = 0;
    } else {
      this.resultado = this.numero1 / this.numero2;
      this.operacion = 'División';
    }
  }
}