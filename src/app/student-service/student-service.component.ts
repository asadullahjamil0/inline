import { Component } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-student-service',
  templateUrl: './student-service.component.html',
  styleUrl: './student-service.component.css',
  // providers: [StudentServiceService]
})
export class StudentServiceComponent {
  public student: any;
  constructor(std: StudentServiceService) {
    this.student = std.getStudent();
    console.log(this.student);
  }

}
