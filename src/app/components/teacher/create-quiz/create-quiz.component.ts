import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Question } from '../../../models/Question';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ip_subject = "";
  ip_topic = "";
  ip_question = "";
  ip_answer = "";
  ip_opt1 = "";
  ip_opt2 = "";
  ip_opt3 = "";
  ip_opt4 = "";

  numberOfQues = 1;
  quizNumber = 1;
  questions: Question[];
  question: Question;
  ngOnInit() {
    this.getQuizNumber();
  }

  addQuestion() {
  
    var question: Question = {
      id: 0,
      question: this.ip_question,
      opt1: this.ip_opt1,
      opt2: this.ip_opt2,
      opt3: this.ip_opt3,
      opt4: this.ip_opt4,
      answer: +this.ip_answer
    };
    if (this.question.question != "") {
      // this.commonService.addQuestion(this.question).subscribe(res => {
      //   res;
      // });
      this.questions.push(question);
    }
    this.numberOfQues++;
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

}
