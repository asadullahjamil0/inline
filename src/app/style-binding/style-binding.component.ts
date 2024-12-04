import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {

  myStyle = {
    'background-color': 'green',
    'color': 'lightblue',
    'font- size': '40px',
    'font-family': 'cooper'
  }
  public condition = true;
  changeColor() {
    this.condition === true ? this.condition = false : this.condition = true;
  }
}
