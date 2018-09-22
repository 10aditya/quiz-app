import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Question } from '../../../models/Question';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private commonService: CommonService, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  addQuiz(){
    this.appComponent.navigate('/teacher/addquiz');
  }
  
  getNumberofQuizs():number{
    var no:number = 0;
    // this.commonService.getNumberOfQuestions().subscribe(res => {

    // });
    return no;
  }

}
