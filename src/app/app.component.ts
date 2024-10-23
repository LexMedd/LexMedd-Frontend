import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'my-cases';
}
