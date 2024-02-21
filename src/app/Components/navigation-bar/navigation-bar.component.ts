import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  template:`
    <section class="">
      <h1>LISTA DE EJERCICIOS</h1>
      <ul>
        <li *ngFor="let path of paths"><p routerLink="{{path.path}}">{{path.title}}</p> </li>
      </ul>
    </section>
  
  `,
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
    paths = [
      {path: '', title: ' home'},
      {path: 'ej1', title: ' ejercicio 1'},
      {path: 'ej2', title: ' ejercicio 2'},
      {path: 'ej3', title: ' ejercicio 3'},
      {path: 'ej4', title: ' ejercicio 4'},
      {path: 'ej5', title: ' ejercicio 5'},
      {path: 'ej6', title: ' ejercicio 6'},
      {path: 'ej7', title: ' ejercicio 7'},
      {path: 'ej8', title: ' ejercicio 8'},
      {path: 'ej9', title: ' ejercicio 9'},
      {path: 'ej10', title: ' ejercicio 10'},
      {path: 'examen', title: ' examen'},
    ]
}
