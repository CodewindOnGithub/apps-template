import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'web-host-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'web-host';
}
