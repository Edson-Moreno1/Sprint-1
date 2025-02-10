import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  imports: [FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  //Definir varianles
mainimage: string = '/Casa portada.webp';


img1: string = '/Casa portada.webp';
img2: string = '/recamara.webp';
img3: string = '/sala.webp';

changemainimage(selectedimage: string): void {
  this.mainimage = selectedimage;

}

// Variables de huéspedes y noches 

huespedes: number = 1;
noches: number = 1;

// Costo por huésped y por noche
costoPorHuesped: number = 500;
costoPorNoche: number = 1000;

// Variables para los extras
mascota: boolean = false;
calefaccion: boolean = false;
ruta: boolean = false;
senderismo: boolean = false;
visita: boolean = false;

// Precios de los extras
precios = {
  mascota: 250,
  calefaccion: 500,
  ruta: 150,
  senderismo: 200,
  visita: 50,
};

// Función para cambiar el número de huéspedes
cambiarHuespedes(cambio: number): void {
  this.huespedes = Math.max(1, this.huespedes + cambio);
}
// Función para cambiar el número de noches
cambiarNoches(cambio: number): void {
  this.noches = Math.max(1, this.noches + cambio);
}

// Función para calcular el costo total
getTotal(): number {
  let total = 0;

// Sumar costo de huéspedes y noches
total += this.huespedes * this.costoPorHuesped;
total += this.noches * this.costoPorNoche; 

// Sumar extras si están seleccionados 
if (this.mascota) total += this.precios.mascota;
if (this.calefaccion) total += this.precios.calefaccion;
if (this.ruta) total += this.precios.ruta;
if (this.senderismo) total += this.precios.senderismo;
if (this.visita) total += this.precios.visita;

return total;
}

} // CIERRE DE LA CLASE BodyComponent