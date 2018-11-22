import { Component, Input } from '@angular/core';

@Component({
  selector: 'apply-button',
  template: `
    <row>
      <bcol all="12 8 6 4" allOffset="0 2 3 4">
        <a class="apply" href="{{href}}">{{ label }}</a>
      </bcol>
    </row>
  `,
})
export class ApplyButtonComponent {
  @Input() readonly href: string;
  @Input() readonly label: string;
}
@Component({
  selector: 'ng-kyoto-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor() {
    // noop
  }
}
