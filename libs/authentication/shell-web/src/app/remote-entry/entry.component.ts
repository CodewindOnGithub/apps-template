import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'authentication-shell-web-entry',
  template: `<router-outlet></router-outlet> `,
})
export class RemoteEntryComponent {}
