import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Teacher } from '../../../models/Teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers:Teacher[] = [];

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getTeachersList();
  }

  getTeachersList(){
    this.commonService.getTeacherList().subscribe(res=>{
      if(res!=null){
        this.teachers = res;
      }      
    })
  }
}
