import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isDisabled: boolean = false;

  name: string = ""
  city = "Toronto"
  countries = ["Canada", "USA", "Russia", "Mexico"]

  imageURL: string = "https://fastly.picsum.photos/id/626/200/300.jpg?hmac=8P_lvCUkxcubJb1bckQk2YQymRoW6JdkOgtL4ThZMjw"

  stud = {
    id: 1,
    fname: "Elizaveta",
    lname: "Vygovskaia"
  }


  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    alert("Hello Button : " + this.name)
  }

}


