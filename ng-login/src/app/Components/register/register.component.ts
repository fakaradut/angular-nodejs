import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../Services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    password: "",
    email: ""
  };


  constructor(
    private registerService: RegisterService,
    private router:Router) { }

  ngOnInit(): void {
  }

  register() {

    this.registerService.registerUser(this.user)
      .subscribe(res => {
        localStorage.setItem('token',res.token) ;
        console.log(res.token);
        this.router.navigate(['/restricted']);
      },
        error => console.log('error'));
  }

}
