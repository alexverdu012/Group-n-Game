import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../entities/user/user.model';
import { UserService } from '../../../entities/user/service/user.service';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {
    this.reloadPage();
    this.getUser(this.router.snapshot.paramMap.get('id'));
  }
  user?: User;

  private reloadPage() {
    if (localStorage.getItem('fromLogin') == 'yes') {
      localStorage.setItem('fromLogin', 'no');
      window.location.reload();
    } else {
      localStorage.removeItem('fromLogin');
    }
  }

  private getUser(id: any) {
    this.userService.getProfile(id).then((res) => {
      this.user = res.data;
    });
  }
}
