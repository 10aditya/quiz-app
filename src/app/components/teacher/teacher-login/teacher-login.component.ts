import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { TeacherDashboardComponent } from '../teacher-dashboard/teacher-dashboard.component';
@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private authService: AuthService, private appComponent: AppComponent) { }

  public static teacherId:number=-1;
  ngOnInit() {
  }

  login(event){
  	event.preventDefault();
  	const target = event.target;
  	const emailid = target.querySelector(".input_email").value;
  	const password = target.querySelector(".input_password").value;
    console.log(emailid, password);
    this.authService.login(emailid, password,'teacher').subscribe(data=>{
      if(data!=null){
        this.appComponent.navigate('/teacher/dashboard');
        TeacherLoginComponent.teacherId = data['id'];
        console.log(data, TeacherLoginComponent.teacherId);
      }else {
        TeacherLoginComponent.teacherId = 1;
      };
    });
  }

}
