import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';
import { Quiz } from '../../../models/Quiz';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {

  quizId: number;
  quiz:Quiz = {
    id:0,
    subject:"",
    topic:"",
    tid:0,
    timelimit:0,
    timestamp:"",
    questions:""
  };
  teacherName:string = "";

  constructor(private route: ActivatedRoute,private router: Router, private service: CommonService) { }

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.getQuizById();
  }

  getQuizById(){
    this.service.getQuizById(this.quizId).subscribe(res =>{
      this.quiz = res;
      this.service.getTeacherNameById(this.quiz.tid).subscribe(res=>{
        this.teacherName = res;
        console.log(this.quiz);
      })
    });
  }

}
