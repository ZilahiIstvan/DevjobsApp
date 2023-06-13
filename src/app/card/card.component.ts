import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardId: number = -1;
  @Input() cardIconSrc: string = '';
  @Input() cardIconBg: string = '';
  @Input() cardPosted: string = '';
  @Input() cardjobType: string = '';
  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  @Input() cardLocation: string = '';
}
