import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Student';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getStudentsList();
  }

  getStudentsList() {
    this.commonService.getStudentList().subscribe(res => {
      if (res != null) {
        this.students = res;
      }
    });
  }

}