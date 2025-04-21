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

  isAuthenticated = true; // Add authentication state

  user = {
    name: 'GiGin',
    avatar: '',
  };

  showUserMenu = false;

  constructor(private router: Router) {
    // TODO: Get actual auth state from your auth service
    // this.isAuthenticated = this.authService.isAuthenticated();
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    // TODO: Implement actual logout logic
    console.log('Logout clicked');
    this.isAuthenticated = false;
  }

  isActive(menuItem: { routerLink: string }): boolean {
    return this.router.url === menuItem.routerLink;
  }
}
