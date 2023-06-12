import { Component } from '@angular/core';
import { CardsData } from '../app/cards-data';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: CardsData[] = data;

  colorModeFlag: boolean = false; // false - light, true - dark

  changeCheckBox() {
    this.colorModeFlag = !this.colorModeFlag;
  }
}
