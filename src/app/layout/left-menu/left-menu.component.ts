import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
  menuItems = [{ label: 'Home', link: '/home', icon: 'home' }];

  user = {
    name: 'GiGin',
    avatar: '',
  };

  showUserMenu = false;

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    // Implement logout logic here
    console.log('Logout clicked');
  }
}
