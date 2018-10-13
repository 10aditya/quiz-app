import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';
import { Quiz } from '../../../models/Quiz';
import { Question } from '../../../models/Question';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {

  questions:Questions[]=[];
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
      this.getQuestions();
    });
  } 

  getQuestions(){
    let qs = this.quiz.questions.split(",");
    for(let i=0; i<qs.length; i++){
      this.service.getQuestionById(Number(qs[i])).subscribe(res=>{
        this.questions[i]=new Questions(i+1, res);
      });
    }
  }
}

export class Questions {
  no:number;
  ques:Question;
  constructor(no:number, ques:Question){
    this.no = no;
    this.ques = ques;
  }
}