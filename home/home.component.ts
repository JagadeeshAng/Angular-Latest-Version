import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello World!');

  keyUpHandler(event : KeyboardEvent) {
    // console for normal key event
    // console.log('User typed something in the input');
    //  console for  Keyboard Event
    console.log(`user selected key is ${event.key} key`);
  }
}
