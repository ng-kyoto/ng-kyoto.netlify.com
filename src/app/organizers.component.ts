'use strict';
import { Component } from '@angular/core';

@Component({
  selector: 'organizers',
  templateUrl: './organizers.component.html',
})
export class OrganizersComponent {
  organizers: IOrganizer[] = [
    { id: 'zilch8', url: 'https://twitter.com/zilch8', name: 'sayanaka' },
    { id: 'N372Drag', url: 'https://twitter.com/N372Drag', name: 'ニシえもん' },
    {
      id: 'okunokentaro',
      url: 'https://github.com/okunokentaro',
      name: '奥野 賢太郎',
    },
    { id: '_likr', url: 'https://vdslab.jp/', name: '尾上 洋介' },
  ];
  constructor() {}
}

export interface IOrganizer {
  id: string;
  url: string;
  name?: string;
}
