import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inline';
  name = "AsadUllah Jamil";
  fruits = ["Banana", "Mango", "Apple", "Grapes"];
  obj = {
    name: "AsadUllah",
    age: 23,
    isMarried: false
  }
  changeName() {
    this.name === 'AsadUllah Jamil' ? this.name = 'Bilal Abbas' : this.name = 'AsadUllah Jamil';
  }
}
