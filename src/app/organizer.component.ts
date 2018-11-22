'use strict';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'organizer',
  templateUrl: './organizer.component.html',
})
export class OrganizerComponent {
  @Input('organizer')
  set organizer(v: any) {
    this._organizer = v;
  }
  @Input('posts')
  set allPosts(allPosts: any) {
    if (allPosts) {
      allPosts.forEach((posts) => {
        if (!posts) {
          return;
        }
        if (posts[0].user.id !== this.organizer.id) {
          return;
        }

        this.posts = posts;
        this.twitterName = posts[0].user.twitter_screen_name;
      });
    }
  }
  _organizer: any;
  posts: any[];
  twitterName: string;

  constructor() {
    // noop
  }

  get organizer(): any {
    return this._organizer;
  }

  get organizerHead(): string {
    const org = this.organizer;
    return org.realName ? `${org.realName} (${org.id})` : org.id;
  }

  get organizerAvatar(): string {
    return `assets/avatar-${this._organizer.id}.png`;
  }
}
