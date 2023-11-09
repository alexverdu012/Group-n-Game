import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbar } from '../../config/common/navbar';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navitem = navbar;

}
