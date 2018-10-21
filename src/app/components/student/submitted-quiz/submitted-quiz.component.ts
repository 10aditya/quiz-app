import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Submission } from 'src/app/models/Submission';

@Component({
  selector: 'app-submitted-quiz',
  templateUrl: './submitted-quiz.component.html',
  styleUrls: ['./submitted-quiz.component.css']
})
export class SubmittedQuizComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  list:Array<SubmissionList>=[];
  ngOnInit() {
    this.getSubmissionList();
  }

  getSubmissionList(){
    this.commonService.getSubmissionsByStudentId().subscribe(res=>{
      if(res!=null){
        res.forEach(element => {
          this.commonService.getQuizById(element.qid).subscribe(response=>{
            this.commonService.getTeacherNameById(response.tid).subscribe(res=>{
              this.list.push(new SubmissionList(element, res));             
            });
          });
        });
      }
    });
  }

}
export class SubmissionList {
  sub:Submission;
  teachername:string;
  constructor(sub:Submission, teachername:string){
    this.sub=sub;
    this.teachername=teachername;
  }
}
