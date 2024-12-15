import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  public condition = true;
  click() {
    return this.condition === true ? this.condition = false : this.condition = true;
  }

}
