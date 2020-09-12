import { Component } from '@angular/core';
import { LoginService} from './Services/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-login';

  constructor(public loginService:LoginService){}

}
