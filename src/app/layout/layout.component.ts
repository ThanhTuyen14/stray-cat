import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
