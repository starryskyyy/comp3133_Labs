import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div[college]',
  template: '<h1>College Component - {{college_name}}</h1>',
  //styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  constructor() { }
  college_name = "George Brown College"
  ngOnInit(): void {
  }

}


