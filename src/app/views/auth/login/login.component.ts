import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../entities/user/service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {
    this.reloadPage();
  }
  loginForm?: FormsModule;
  email: string = '123@123.com';
  password: string = '123';

  public registerUser(): void {
    this.router.navigate(['register']);
  }

  private reloadPage() {
    if (localStorage.getItem('fromLogout') == 'yes') {
      localStorage.setItem('fromLogout', 'no');
      window.location.reload();
    } else {
      localStorage.removeItem('fromLogout');
    }
  }

  public logUser(): void {
    this.userService.logUser(this.email, this.password).then((res) => {
      console.log(res.data);
      if (!res.data) {
        console.log('No');
      } else {
        this.router.navigate(['profile', res.data.id]);
        localStorage.setItem('fromLogin', 'yes');
      }
    });
  }
}
