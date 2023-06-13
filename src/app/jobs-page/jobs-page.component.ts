import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardsData } from '../cards-data';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss'],
})
export class JobsPageComponent {
  @Input() data: CardsData[] = [
    {
      id: -1,
      compIcon: '',
      compIconBg: '',
      posted: '',
      jobType: '',
      jobTitle: '',
      jobSubTitle: '',
      jobLocation: '',
      website: '',
      apply: '',
      description: '',
      requirements: { content: '', items: [] },
      role: { content: '', items: [] },
    },
  ];
  @Input() loadMoreClick: any;
}
