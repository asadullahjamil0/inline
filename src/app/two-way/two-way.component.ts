import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {
  public name = "";
  click() {
    this.name = "AsadUllah Jamil";
  }

}
