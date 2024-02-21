import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./Components/navigation-bar/navigation-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <section>
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
