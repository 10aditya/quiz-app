import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Question } from '../../../models/Question';
import { AppComponent } from '../../../app.component';
import { TeacherLoginComponent } from '../teacher-login/teacher-login.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private commonService: CommonService, private appComponent: AppComponent) { }

  ngOnInit() {
    if(TeacherLoginComponent.teacherId==-1){
      this.appComponent.navigate("/home");
    }
  }

  
  
  getNumberofQuizs():number{
    var no:number = 0;
    // this.commonService.getNumberOfQuestions().subscribe(res => {

    // });
    return no;
  }

}
