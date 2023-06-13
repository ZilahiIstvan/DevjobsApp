import { Component } from '@angular/core';
import { CardsData } from '../app/cards-data';
import { ViewportScroller } from '@angular/common';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  // filter out the displayed data
  filterData = (dataSize: number, data: CardsData[]): CardsData[] => {
    return data.filter((element, index) => {
      return index < dataSize;
    });
  };

  data: CardsData[] = data; // row data
  dataSize: number = 12; // default displayed items
  colorModeFlag: boolean = false; // false - light, true - dark
  filteredData: CardsData[] = this.filterData(this.dataSize, this.data); // filtered data

  // handle color dark/light mode
  changeCheckBox = (): void => {
    this.colorModeFlag = !this.colorModeFlag;
  };

  // handle load more click
  changeDataSize = (): void => {
    this.dataSize = this.dataSize + 6;
    this.filteredData = this.filterData(this.dataSize, this.data);
    setTimeout(() => {
      scrollBy({ left: 0, top: 500, behavior: 'smooth' });
    }, 100);
  };
}
