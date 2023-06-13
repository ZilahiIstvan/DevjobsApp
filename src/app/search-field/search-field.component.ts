import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  @Input() imgSrc: string = '';
  @Input() defaultValue: string = '';

  filterFocused: boolean = false;

  handleSearchFieldFocus(): void {
    this.filterFocused = true;
    console.log('true');
  }

  handleSearchFieldBlur(): void {
    this.filterFocused = false;
    console.log('false');
  }
}
