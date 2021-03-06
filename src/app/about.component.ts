'use strict';

import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  message = [
    'ng-kyotoはAngularをテーマに京都で活動を行っているユーザーコミュニティです。',
    '日本の古都、京都から最先端のWeb技術を学び、発信していきます。',
    '古都の空気に触れながら、Angularの未来を一緒に学びませんか？',
    'Angularって聞くと「なんぎやな、ややこしな」と思わはるかもしれませんけど、',
    '周りと一緒に勉強したら意外ととっつきやすいんですよ。',
  ];

  constructor() {
    // noop
  }
}
