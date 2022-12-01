import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@authentication/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'authentication-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userList$ = this.loginFacade.userList$;

  constructor(private loginFacade: LoginFacade) {}

  ngOnInit(): void {
    this.loginFacade.load();
  }
}
