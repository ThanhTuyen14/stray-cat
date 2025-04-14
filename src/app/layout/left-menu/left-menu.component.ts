import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { IMenu } from '../../../shares/models/base.interface';

@Component({
  selector: 'app-left-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss',
})
export class LeftMenuComponent {
  menuItems: IMenu[] = [{ title: 'Home', routerLink: '/home', icon: 'home' }];

  user = {
    name: 'GiGin',
    avatar: '',
  };

  showUserMenu = false;

  constructor(private router: Router) {}

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    // Implement logout logic here
    console.log('Logout clicked');
  }

  isActive(menuItem: { routerLink: string }): boolean {
    return this.router.url === menuItem.routerLink;
  }
}
