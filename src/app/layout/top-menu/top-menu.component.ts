import { Component } from '@angular/core';
import { IMenu } from '../../../shares/models/base.interface';

@Component({
  selector: 'app-top-menu',
  imports: [],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent {
  menus: IMenu[] = [];
}
