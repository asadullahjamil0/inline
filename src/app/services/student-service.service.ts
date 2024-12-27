import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  getStudent() {
    return [{ name: "AsadUllah", age: 23, standard: 12 },
    { name: "Basit", age: 26, standard: 11 },
    { name: "Umer", age: 21, standard: 8 }
    ]
  }

  constructor() { }
}
