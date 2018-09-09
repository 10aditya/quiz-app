import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(event){
  	event.preventDefault();
  	const target = event.target;
  	const emailid = target.querySelector(".input_email").value;
  	const password = target.querySelector(".input_password").value;
    console.log(emailid, password);
    this.authService.login(emailid, password,'student').subscribe(data=>{
      console.log(data);
    });
  }

}
