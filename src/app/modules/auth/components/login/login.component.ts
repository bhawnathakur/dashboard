import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginmessage: string = "Invalid Credentials";
  loginbool: boolean = true;
  mod: any = {
    username: null,
    password: null
  };
  durationInSeconds = 5;
  constructor(private Auth: AuthService, private router: Router) {}
  mess: string = "";
  ngOnInit() {}
  loginuser(e) {
    const username = this.mod.username;
    const password = this.mod.password;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        console.log(data);
        this.loginbool = true;
        this.Auth.isLoggedIn = true;
        this.mess = "Please wait while we log you in";
        this.router.navigate(["/home"]).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      } else {
        //e.resetForm();
        this.loginbool = false;
        this.Auth.isLoggedIn = false;
        this.mess = "";
      }
      console.log(data);
    });
    console.log(username);
  }
}
