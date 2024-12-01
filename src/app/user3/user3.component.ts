import { Component } from '@angular/core';

@Component({
  selector: 'app-user3',
  template: `
    <p>
      this file is without style and htmlTemplate!
    </p>
  `,
  styles: `
  p{
    color:brown;
    font-size:50px;
    font-weight:600;
    font-family:impact;
  }
  `
})
export class User3Component {

}
