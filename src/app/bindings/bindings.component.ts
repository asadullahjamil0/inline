import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  isDisable = false;
  clickHere() {
    return this.isDisable === true ? this.isDisable = false : this.isDisable = true;
  }

}
