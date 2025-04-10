import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IMenu } from '../../../shares/models/base.interface';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent {
  menus: IMenu[] = [
    {
      id: 1,
      title: 'Home',
      routerLink: '/home',
    },
  ];
  userAvatar?: string;
  username = 'John Doe';

  constructor(private router: Router) {}

  getUserInitials(): string {
    return this.username
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  isActive(url: string): boolean {
    // Remove the leading slash if present
    const currentPath = this.router.url.split('?')[0].replace(/^\//, '');
    const menuPath = url.replace(/^\//, '');

    // Check if current path starts with menu path
    return (
      currentPath === menuPath ||
      (menuPath !== '' && currentPath.startsWith(menuPath + '/'))
    );
  }
}
