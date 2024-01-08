import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLightMode = true;
  get lightModeIcon() {
    if (this.isLightMode) {
      return 'icon-moon.svg';
    }
    return 'icon-sun.svg';
  }

  toggleIsLightMode() {
    document.querySelector('body')?.classList.toggle('darkMode');
    this.isLightMode = !this.isLightMode;
  }
}
