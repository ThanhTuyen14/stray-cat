import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TopMenuComponent, { static: false }) topMenu!: TopMenuComponent;

  ngAfterViewInit() {
    // Check immediately
    this.checkMenuHeight();

    // Check after a short delay
    setTimeout(() => {
      this.checkMenuHeight();
    }, 0);

    // Check after a longer delay to ensure everything is rendered
    setTimeout(() => {
      this.checkMenuHeight();
    }, 100);
  }

  private checkMenuHeight() {
    const menuContainer = document.querySelector('.menu-container');

    if (menuContainer) {
      const menuHeight = menuContainer.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        '--menu-height',
        `calc(100vh - ${menuHeight}px)`
      );
    }
  }
}
