import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../models/Quiz';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes: QuizTeacherNameTuple[] = [];
  constructor(private router:Router, private commonService: CommonService) { }

  ngOnInit() {
    this.getQuizzes();
  }
  getQuizzes() {
    this.commonService.getQuizzes().subscribe(res => {
      if (res != null) {
        res.forEach(element => {
          this.getTeacherNameById(element.tid).subscribe(res => {
            this.quizzes.push(new QuizTeacherNameTuple(element, "by " + res));
          });
        });
      }
    });
  }
  getTeacherNameById(tid: number) {
    return this.commonService.getTeacherNameById(tid);
  }

  viewQuiz(quiz:any){
    this.router.navigate(['quiz/',quiz.quiz.id]);
  }
}

export class QuizTeacherNameTuple {
  quiz: Quiz; name: string;
  constructor(quiz: Quiz, name: string) {
    this.quiz = quiz;
    this.name = name;
    console.log(quiz, name);
  }
}