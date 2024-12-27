import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css',
  // providers: [StudentServiceService]
})
export class StudentDataComponent {
  public student: any;
  constructor(std: StudentServiceService) {
    this.student = std.getStudent();

  }

}
