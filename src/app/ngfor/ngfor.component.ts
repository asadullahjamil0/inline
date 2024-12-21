import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  public fruits = ["banana", "Apple", "Watermelon", "Orange", "Mango"];
  public persons = [
    { name: "AsadUllah", age: 23, isSingle: true },
    { name: "Abdullah", age: 25, isSingle: false },
    { name: "Shareen", age: 27, isSingle: true }
  ]
}
