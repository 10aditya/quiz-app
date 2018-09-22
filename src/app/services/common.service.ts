import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/Question';
import { map } from 'rxjs/operators';
import { TeacherLoginComponent } from '../components/teacher/teacher-login/teacher-login.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {

  }

  addQuestion(ques: Question) {
    return this.http.post('http://127.0.0.1:1234/api/question.php', {
      question: ques.question,
      opt1: ques.opt1,
      opt2: ques.opt2,
      opt3: ques.opt3,
      opt4: ques.opt4,
      answer: ques.answer
    }).pipe(map((response: any) => {
      return response;
    }))
  }
  getNumberOfQuestions() {
    return this.http.post('http://127.0.0.1:1234/api/quiz.php',{
        id:TeacherLoginComponent.teacherId      
    }).pipe(map((res:any) => {
       return res; 
    }));
  }
}
