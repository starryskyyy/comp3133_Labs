import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private REST_API_URL = "https://reqres.in/api/users?page=2"

  constructor(private httpClient: HttpClient) {

   
   }
   public getAllUserName(){
      return this.httpClient.get(this.REST_API_URL).pipe(retry(3))
   }

   public getAllUsers(){
     return this.httpClient.get("https://reqres.in/api/users?page=2").pipe(retry(3))
   }

}
