'use strict';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'organizers',
  templateUrl: './organizers.component.html'
})
export class OrganizersComponent {
  organizers = [
    {id: 'armorik83', realName: '奥野 賢太郎', description: 'ng-kyoto代表 Angular芸人'},
    {id: '_likr', realName: '尾上 洋介', description: 'やせいのプログラマー'},
    {id: 'shinsukeimai', realName: '今井 晨介', description: '体育会系プログラマ'},
  ];
  angularPosts: any;

  constructor(private http: HttpClient) {
    this.fetchUser();
  }

  fetchUser() {
    const mockurl = 'assets/mock-request.json';
    return this.http.get(mockurl).subscribe(
      res => {
        this.angularPosts =  this.filterPost(res);
      },
      error => console.log(error)
    );
  }

  /**
   * returns exp.
   * [[imai, imai, imai], [armorik83, armorik83, armorik83], [_likr]]
   *
   * @param {Array<*>} posts
   * @returns {Array<*>}
   */
  filterPost(posts: any): any[] {
    const organizersPosts = {};
    posts.map(post => {
      const isAngularPost = post.tags.some(tag => tag.name.match(/ngular/));
      return isAngularPost ? post : void 0;
    })
      .filter(post => post)
      .filter((post, idx) => idx < 20)
      .forEach(post => {
        organizersPosts[post.user.id] = organizersPosts[post.user.id] || [];
        if (5 <= organizersPosts[post.user.id].length) { return; }
        organizersPosts[post.user.id].push(post);
      });

    const result = [];
    Object.keys(organizersPosts).forEach(organizer => result.push(organizersPosts[organizer]));

    // The return type must be an Array<Array<QiitaPost>>
    return result;
  }
}
