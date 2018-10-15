import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-student-login',
  styleUrls: ['./student-login.component.css'],
  templateUrl: './student-login.component.html',
})
export class StudentLoginComponent implements OnInit {

  static studentId:number=-1;

  constructor(private authService: AuthService, private appComponent: AppComponent) { }

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
      StudentLoginComponent.studentId = data['id'];
      this.appComponent.navigate("/student/dashboard");
    });
  }

}
