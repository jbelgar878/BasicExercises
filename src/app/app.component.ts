import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./Components/navigation-bar/navigation-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <section>
    <p style="width: 30%;">preguntar a nuria sobre las validaciones, tambien necesito que me diga si el ej7 solo es mayuscula la 1 letra o toodas y en el ejercicio 9 no se que pide</p>

      <app-navigation-bar />
      <router-outlet />
    </section>

  `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavigationBarComponent]
})
export class AppComponent {
  title = 'basicsExercises';
}
