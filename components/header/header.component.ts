import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Syntax With Signals
  // title = signal('This is my First Angular Application');
  // Syntax Without Sugnals
  title = 'This is the Normal Data Binding';
}
