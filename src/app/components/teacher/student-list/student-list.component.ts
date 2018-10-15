import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models/Student';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: StudentList[] = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getStudentsList();
  }

  getStudentsList() {
    this.commonService.getStudentList().subscribe(res => {
      if (res != null) {
        res.forEach(element => {
          this.commonService.getStudentSubmissionCount(element.id).subscribe(res=>{
            this.students.push(new StudentList(res, element));
          })
        });
      }
    });
  }

}
export class StudentList {
  no:number;
  student:Student;
  constructor(no:number,student:Student){
    this.no = no;
    this.student = student;
  }
}