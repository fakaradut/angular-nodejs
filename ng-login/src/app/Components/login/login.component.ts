import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    password: "",
    email: ""
  };

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user['email'] + " " + this.user['password'])
    this.loginService.loginUser(this.user)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        console.log('logged in');
        this.router.navigate(['/restricted']);
      },
        error => console.log('error!'));
  }
}
