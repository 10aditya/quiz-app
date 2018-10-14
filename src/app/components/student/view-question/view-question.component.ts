import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../models/Question';
import { AttemptQuizComponent } from '../attempt-quiz/attempt-quiz.component';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() questionNo:number;


  constructor() {

  }

  ngOnInit() {
  }

  setAnswer(answer: number) {
    AttemptQuizComponent.answerArray[this.questionNo-1]=answer;
    for (let i = 1; i < 5; i++) {
      if (i == answer) {
        document.getElementById("opt" + i).style.backgroundColor = "green";
      } else {
        document.getElementById("opt" + i).style.backgroundColor = "white";
      }
    }
    console.log(AttemptQuizComponent.answerArray);
  }

  static updateViews(no:number){
    for (let i = 1; i < 5; i++) {
      if (i == AttemptQuizComponent.answerArray[no-1]) {
        document.getElementById("opt" + i).style.backgroundColor = "green";
      } else {
        document.getElementById("opt" + i).style.backgroundColor = "white";
      }
    }
  }

}
