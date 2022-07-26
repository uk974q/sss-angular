import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// import { User } from "../model/user.model";

@Injectable({
  providedIn:"root"
})
export class UserService{
  private USERS_URL:string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient){}

  fetchUsers(){
    return this.httpClient.get(this.USERS_URL)
  }
  fetchUserDetails(param:number){
    return this.httpClient.get(this.USERS_URL+"/"+param)
  }

}
