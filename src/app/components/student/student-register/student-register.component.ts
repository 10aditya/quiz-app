import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private authService:AuthService, private appComponent:AppComponent) { }

  ngOnInit() {
  }

  register(event){
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector(".input_name").value;
  	const emailid = target.querySelector(".input_email").value;
  	const password = target.querySelector(".input_password").value;
    console.log(emailid);
    this.authService.register(name, emailid, password,'student').subscribe(data=>{
      console.log(data);
      StudentLoginComponent.studentId = data['id']; 
      this.appComponent.navigate("/student/dashboard"); 
    });

  }

}
