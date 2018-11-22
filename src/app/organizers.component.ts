'use strict';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'organizers',
  templateUrl: './organizers.component.html',
})
export class OrganizersComponent {
  organizers: IOrganizer[] = [
    { id: 'zilch8', url: 'https://twitter.com/zilch8', name: 'sayanaka', description: '代表' },
    { id: 'N372Drag', url: 'https://twitter.com/N372Drag', name: 'ニシえもん' },
    {
      id: 'okunokentaro',
      url: 'https://github.com/okunokentaro',
      name: '奥野 賢太郎',
    },
    { id: '_likr', url: 'https://vdslab.jp/', name: '尾上 洋介' },
  ];
  angularPosts: any;

  constructor(private http: HttpClient) {
    this.fetchUser();
  }

  fetchUser() {
    const mockurl = 'assets/mock-request.json';
    return this.http.get(mockurl).subscribe(
      (res) => {
        this.angularPosts = this.filterPost(res);
      },
      (error) => console.log(error),
    );
  }

  /**
   * returns exp.
   * [[imai, imai, imai], [armorik83, armorik83, armorik83], [_likr]]
   */
  filterPost(posts: any): any[] {
    const organizersPosts = {};
    posts
      .map((post) => {
        const isAngularPost = post.tags.some((tag) => tag.name.match(/ngular/));
        return isAngularPost ? post : void 0;
      })
      .filter((post) => post)
      .filter((post, idx) => idx < 20)
      .forEach((post) => {
        organizersPosts[post.user.id] = organizersPosts[post.user.id] || [];
        if (5 <= organizersPosts[post.user.id].length) {
          return;
        }
        organizersPosts[post.user.id].push(post);
      });

    const result = [];
    Object.keys(organizersPosts).forEach((organizer) => result.push(organizersPosts[organizer]));

    // The return type must be an Array<Array<QiitaPost>>
    return result;
  }
}

export interface IOrganizer {
  id: string;
  url: string;
  name?: string;
  description?: string;
}
