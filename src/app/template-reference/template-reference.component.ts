import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {
  public displayName = '';
  getName(value: any) {
    this.displayName = value;
  }

  // getName(item: any) {
  //   console.log(item);
  // }
  public headingName = '';
  public condition = true;
  public hide = false;
  getHeading(item: any) {
    this.headingName = item;
  }
  changeCondition() {
    this.condition === true ? this.condition = false : this.condition = true;
  }
  hideText() {
    this.hide === true ? this.hide = false : this.hide = true;
  }
}
