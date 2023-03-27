import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  @Input()
  faculty_name!: string;

  @Output()
  clickCallBack = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    alert('clickCallBack')
    this.clickCallBack.emit()
  }

}
