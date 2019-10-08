import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export interface RegisterResponse {
  success: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn: boolean = false;
  url: string = "http://localhost/api/";
  constructor(private http: HttpClient) {}
  getUserDetails(username, password) {
    return this.http.post<RegisterResponse>(this.url + "auth.php", {
      username,
      password
    });
  }
}
