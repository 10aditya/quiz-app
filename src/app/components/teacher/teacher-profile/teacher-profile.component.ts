import { Component, OnInit } from '@angular/core';
import { TeacherLoginComponent } from '../teacher-login/teacher-login.component';
import { AppComponent } from 'src/app/app.component';
import { CommonService } from 'src/app/services/common.service';
import { Teacher } from 'src/app/models/Teacher';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  constructor(private appComponent:AppComponent, private commonService:CommonService) { }

  teacher:Teacher;
  ngOnInit() {
    this.commonService.getTeacherById().subscribe(res=>{
      this.teacher=res;
    });
  }
  logout(){
    TeacherLoginComponent.teacherId=-1;
    this.appComponent.navigate('home');
  }
  addQuiz(){
    this.appComponent.navigate('/teacher/addquiz');
  }
}
