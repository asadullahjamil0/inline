import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter = 0;
  changeCount(str: string) {
    return str == 'Add' ? this.counter++ : this.counter--;
  }

}
