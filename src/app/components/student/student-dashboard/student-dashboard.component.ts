import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { StudentLoginComponent } from '../student-login/student-login.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private appComponent:AppComponent) { }

  ngOnInit() {
    if(StudentLoginComponent.studentId==-1){
      this.appComponent.navigate("/home");
    }
  }

}
