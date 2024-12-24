import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() myData: string = '';
  @Input('myData') newData: string = '';
  @Input() myArr: string[] = [];
  @Input() myObj: any = {};

}
