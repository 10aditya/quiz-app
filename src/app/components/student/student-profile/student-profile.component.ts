import { Component, OnInit } from '@angular/core';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { AppComponent } from 'src/app/app.component';
import { CommonService } from 'src/app/services/common.service';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(private appComponent: AppComponent, private commonService: CommonService) { }
  student: Student;
  ngOnInit() {
    this.commonService.getStudentById().subscribe(res => {
      this.student = res;
      console.log(res);
    })
  }

  logout() {
    StudentLoginComponent.studentId = -1;
    this.appComponent.navigate('home');
  }

}
