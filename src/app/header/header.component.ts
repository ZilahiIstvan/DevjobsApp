import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  colorModeFlag: boolean = false; // false - light, true - dark

  changeCheckBox(): void {
    this.colorModeFlag = !this.colorModeFlag;
  }
}
