import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = "Interpolation";
  name = "AsadUllah Jamil Ch";
  age = 34;
  helloMessage(item: string) {
    return "Hello " + item;
  }
  public url = window.location.href;

}
