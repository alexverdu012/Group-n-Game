import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import { UserService } from '../../../entities/user/service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService) {}
  loginForm?: FormsModule
  email: string = '';
  password: string = '';

  public registerUser(): void {
    this.router.navigate(['register'])
  }

  public logUser(): void {
    console.log('hola');
    const response = this.userService.logUser(this.email, this.password)
    console.log(response)
  }

}
