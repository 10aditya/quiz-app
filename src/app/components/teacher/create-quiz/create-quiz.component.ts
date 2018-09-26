import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Question } from '../../../models/Question';
import { count } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
import { Quiz } from '../../../models/Quiz';
import { TeacherLoginComponent } from '../teacher-login/teacher-login.component';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  QUIZ:Quiz;

  ip_subject = "";
  ip_topic = "";
  ip_question = "";
  ip_answer = "";
  ip_opt1 = "";
  ip_opt2 = "";
  ip_opt3 = "";
  ip_opt4 = "";
  ip_timelimit = "";
  numberOfQues = 1;
  quizNumber = 1;
  queNumber=1;
  stringofques="";
  questions = new Array<Question>();
  question: Question;
  ngOnInit() {
    this.getQuizNumber();
  }

  addQuestion() {
    var question: Question = {
      id: this.queNumber,
      question: this.ip_question,
      opt1: this.ip_opt1,
      opt2: this.ip_opt2,
      opt3: this.ip_opt3,
      opt4: this.ip_opt4,
      answer: +this.ip_answer
    };
    console.log(question);
    if (question.question == "" ||
      question.opt1 == "" ||
      question.opt2 == "" ||
      question.opt3 == "" ||
      question.opt4 == "" ||
      this.ip_answer == "") {
      alert("Please fill all the fields of question to continue");
    } else if(isNaN(question.answer)){
      alert("Please enter option number(1-4) as answer to the question.");      
    } else {    // this.commonService.addQuestion(this.question).subscribe(res => {
      //   res;
      // });
      this.questions.push(question);
      if(this.numberOfQues==1){
        this.stringofques=this.stringofques+this.queNumber;
      } else {
        this.stringofques=this.stringofques+","+this.queNumber;
      }
      this.numberOfQues++;     
      this.queNumber++;
    }
  }

  getNumberOfQuestios(){
    this.commonService.getTotalQuestions().subscribe(res => {
      if(res!=null){
        this.queNumber = 1+Number(res['count(*)']);
      }
    });
  }

  getQuizNumber() {
    this.commonService.getNumberOfQuestions().subscribe(res => {
      console.log(res);
      if (res != null) {
        console.log(1 + res['count(tid)']);
        this.quizNumber = 1 + Number(res['count(tid)']);
      }
    });
  }

  addQuiz(){
    if(this.ip_subject=="" || this.ip_topic==""){
      alert("Please fill all the fields");
      return;
    }
    if(isNaN(+this.ip_timelimit)){
      alert("Please enter valid time limit(in mins.)!");
      return;
    }

    this.QUIZ.id = this.quizNumber;
    this.QUIZ.subject = this.ip_subject;
    this.QUIZ.topic = this.ip_topic;
    this.QUIZ.timelimit = +this.ip_timelimit;
    this.QUIZ.tid = TeacherLoginComponent.teacherId;
    this.QUIZ.questions = this.stringofques;

    this.questions.forEach(obj => {
      this.commonService.addQuestion(obj);
    })
    
    this.commonService.addQuiz(this.QUIZ).subscribe(res=>{
      
    })
  }
}
