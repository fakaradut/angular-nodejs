import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  topics$: Observable<string[]> = of([
    "Java", "JavaScript", "Python"
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
