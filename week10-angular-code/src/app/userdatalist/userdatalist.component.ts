import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserDataService } from '../user-data-service.service'
@Component({
  selector: 'app-userdatalist',
  templateUrl: './userdatalist.component.html',
  styleUrls: ['./userdatalist.component.css']
})
export class UserdatalistComponent {
 /* userList = [{
    "id":7,
    "email":"michael.lawson@reqres.in",
    "first_name":"Michael",
    "last_name":"Lawson",
    "avatar":"https://reqres.in/img/faces/7-image.jpg"
  }]*/

  userList : [User] = [{
    "id":7,
    "email":"michael.lawson@reqres.in",
    "first_name":"Michael",
    "last_name":"Lawson",
    "avatar":"https://reqres.in/img/faces/7-image.jpg"
  }]
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getAllUserName().subscribe({
      next: (res: any) => {
        console.log(res.data)
        this.userList = res.data
        console.log(this.userList)
      },
      complete: () => {
        console.log("Completed")
      },
      error: (error: any) => {     
        console.log(error)
      }
    })
  }
}
