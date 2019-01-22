'use strict';

import { Component, Input } from '@angular/core';
import { IOrganizer } from './organizers.component';

@Component({
  selector: 'organizer',
  templateUrl: './organizer.component.html',
})
export class OrganizerComponent {
  private _organizer: IOrganizer;

  @Input('organizer')
  set organizer(v: IOrganizer) {
    this._organizer = v;
  }
  get organizer(): IOrganizer {
    return this._organizer;
  }

  constructor() {
    // noop
  }

  get organizerHead(): string {
    const org = this.organizer;
    return `(@${org.id})`;
  }

  get organizerAvatar(): string {
    return `assets/avatar-${this._organizer.id}.png`;
  }
}
