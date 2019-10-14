import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {ConstantsService} from './constants.service' ;
export interface RegisterResponse {
  success: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn: boolean = false;
  url:string;
  constructor(private http: HttpClient,private constantsservice:ConstantsService) {

   
  }
 

  getUserDetails(username, password) {
    this.url=this.constantsservice.url;
    return this.http.post<RegisterResponse>(this.url + "auth.php", {
      username,
      password
    });
  }
}
