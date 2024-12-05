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
  getHeading(item: any) {
    this.headingName = item;

  }
}
