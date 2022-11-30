import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'authentication-shell-web-entry',
  template: `<authentication-nx-welcome></authentication-nx-welcome>`,
})
export class RemoteEntryComponent {}
