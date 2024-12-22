import { Component } from '@angular/core';

@Component({
  selector: 'app-fornested',
  templateUrl: './fornested.component.html',
  styleUrl: './fornested.component.css'
})
export class FornestedComponent {
  public persons = [
    { name: "AsadUllah", age: 23, isSingle: true, hobbies: ["Writing", "hiking", "reading"] },
    { name: "Abdullah", age: 25, isSingle: false, hobbies: ["reading", "climbing", "jogging"] },
    { name: "Shareen", age: 27, isSingle: true, hobbies: ["running", "praying", "sleeping"] }
  ]

}
