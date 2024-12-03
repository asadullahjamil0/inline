import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  public cssColor = "orange";
  public condition = true;
  changeColor() {
    return this.cssColor === "orange" ? this.cssColor = "yellow" : this.cssColor = "orange";
  }

}
