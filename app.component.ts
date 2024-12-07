import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <!-- <app-home /> -->
     <main>
     <router-outlet />
    <!-- <app-home /> -->
</main>
  
  `,
  styles: [`
  // p {
  //   background-color: green;
  // }
  main {
    padding:60px;
  }
    `],
})
export class AppComponent {
  title = 'ng-app';
}
