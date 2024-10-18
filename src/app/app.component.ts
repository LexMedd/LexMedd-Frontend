import { Component } from '@angular/core';
import { LoginComponent } from './iam/components/login/login.component';

@Component({
  /* standalone: true, */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  /* imports: [LoginComponent] */
})
export class AppComponent {
  title = 'LexMedd-Frontend';
}
