import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week10 Angular Example';
  name = "Elizaveta Vygovskaia"
  salary = 1234567
  today:Date = new Date()

  student ={
    id:1,
    fnm:"Elizaveta",
    lnm:"Vygovskaia"
  }
}
