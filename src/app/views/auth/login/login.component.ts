import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../entities/user/service/user.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [],
  animations: [],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.reloadPage();
  }

  loginForm?: FormGroup;

  public testToast() {}
  //Form
  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: [undefined, [Validators.required, Validators.minLength(5)]],
      password: [undefined, [Validators.required]],
    });
  }

  public registerUser(): void {
    this.router.navigate(['register']);
  }

  public logUser(): void {
    this.userService
      .logUser(
        this.loginForm?.get(['email'])!.value,
        this.loginForm?.get(['password'])!.value
      )
      .then((res) => {
        console.log(res.data);
        if (!res.data) {
          console.log('No');
        } else {
          this.router.navigate(['profile', res.data.id]);
          localStorage.setItem('fromLogin', 'yes');
        }
      });
  }

  ngOnInit() {
    this.isLoggedIn();
    this.buildForm();
  }

  private isLoggedIn() {
    this.userService.isLoggedIn().then((res) => {
      try {
        if (res.data) {
          this.router.navigate(['profile', res.data.id]);
        }
      } catch (error) {
        console.log({ Error: error });
        this.router.navigate(['home']);
      }
    });
  }

  private reloadPage() {
    if (localStorage.getItem('fromLogout') == 'yes') {
      localStorage.setItem('fromLogout', 'no');
      window.location.reload();
    } else {
      localStorage.removeItem('fromLogout');
    }
  }
}
