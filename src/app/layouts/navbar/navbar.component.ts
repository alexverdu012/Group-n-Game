import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbar } from '../../config/common/navbar';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../entities/user/service/user.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navitem = navbar;
  username?: String = 'Login';
  id?: String;
  isLogged?: Boolean;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn();
  }

  public logout() {
    this.userService.logOut().then(() => {
      this.router.navigate(['login']);
      localStorage.setItem('fromLogout', 'yes');
    });
  }

  private isLoggedIn() {
    this.userService.isLoggedIn().then((res) => {
      try {
        if (res.data) {
          this.username = res.data.username;
          this.id = res.data.id;
          this.isLogged = true;
        } else this.username = 'Login';
      } catch (error) {
        this.username = 'Login';
      }
    });
  }
}
