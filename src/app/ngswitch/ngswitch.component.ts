import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  public pizza = 'tikka1';
  click() {
    this.pizza === 'tikka' ? this.pizza = 'fajita' : this.pizza = 'tikka';
  }

}
