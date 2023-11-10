import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbar } from '../../config/common/navbar';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navitem = navbar;

}
