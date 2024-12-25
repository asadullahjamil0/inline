import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  public name = "asadullah";
  fullName = "asadullah jamil ch";
  public person = {
    name: "asad",
    age: 24,
    city: "sheikhupura"
  }

}
