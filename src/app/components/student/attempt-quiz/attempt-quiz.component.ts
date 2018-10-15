import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';
import { Quiz } from '../../../models/Quiz';
import { Question } from '../../../models/Question';
import { ViewQuestionComponent } from '../view-question/view-question.component';
import { CountdownComponent } from 'ngx-countdown';
import { Submission } from 'src/app/models/Submission';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})

export class AttemptQuizComponent implements OnInit {
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  resetTimer(){
      this.counter.restart();
      this.counter.stop();
      this.counter.pause();
      this.counter.resume();
  }
  question:Question={
    id:0,
    question:"",
    answer:0,
    opt1:"",
    opt2:"",
    opt3:"",
    opt4:""
  };
  static numberOfQues:number=0;
  static answerArray:number[]=[];
  questionNo:number=0;
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
  time = 30;
  teacherName:string = "";
  start_quiz:boolean = false;
  constructor(private appComponent:AppComponent, private route: ActivatedRoute,private router: Router, private service: CommonService) { 
  }
  ngOnInit() {
    if(StudentLoginComponent.studentId==-1){
      this.appComponent.navigate('/home');
    }
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.getQuizById();
  }

  startQuiz(){
    document.getElementById("startbutton").style.display = "none";
    this.start_quiz =true; 
    this.time = this.quiz.timelimit * 60;
  }

  onFinish(){
    let s = new Submission(this.quizId, StudentLoginComponent.studentId, this.quiz.tid, this.calculateScore(), this.getAnswers());
    console.log(s);
    this.service.submitQuiz(s).subscribe(res => {
      alert("The quiz has been submitted.");
      this.appComponent.navigate('/student/dashboard');
    });
  }

  getAnswers(){
    let answers=""
    answers+=AttemptQuizComponent.answerArray[0];
    for(let i=1; i<AttemptQuizComponent.numberOfQues; i++){
      answers=answers + "," +AttemptQuizComponent.answerArray[i];      
    }
    return answers;
  }

  calculateScore(){
    let score = 0;
    for(let i=0; i<AttemptQuizComponent.numberOfQues; i++){
      if(AttemptQuizComponent.answerArray[i]==this.questions[i].ques.answer){
        score++;
      }      
    }
    return score;
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
        AttemptQuizComponent.answerArray[i]=-1;
      });
    }
    AttemptQuizComponent.numberOfQues = qs.length;
  }

  updateQuestion(item:any){
    this.question = item.ques;
    this.questionNo = item.no;
    ViewQuestionComponent.updateViews(this.questionNo);
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