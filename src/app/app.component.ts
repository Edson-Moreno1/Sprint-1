import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { BodyComponent } from "./body/body.component";
import { Body2Component } from "./body2/body2.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BodyComponent, Body2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint1';
}
