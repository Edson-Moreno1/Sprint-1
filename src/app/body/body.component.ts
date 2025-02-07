import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
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
}
