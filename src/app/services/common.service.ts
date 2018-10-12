import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/Question';
import { map } from 'rxjs/operators';
import { TeacherLoginComponent } from '../components/teacher/teacher-login/teacher-login.component';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/Quiz';
import { Student } from '../models/Student';
import { Teacher } from '../models/Teacher';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {

  }

  addQuestion(ques: Question) {
    console.log("received question", ques);
    return this.http.post('http://127.0.0.1:1234/api/question.php', {
      id: ques.id,
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

  getTotalQuestions(){
    return this.http.post('http://127.0.0.1:1234/api/quiz.php', {
      type:3,
      id: TeacherLoginComponent.teacherId
    }).pipe(map((res:any)=>{
      return res;
    }))
  }

  getNumberOfQuestions() {
    return this.http.post('http://127.0.0.1:1234/api/quiz.php', {
      type: 1,
      id: TeacherLoginComponent.teacherId
    }).pipe(map((res: any) => {
      return res;
    }));
  }

  getNumberOfQuizes() {
    return this.http.post('http://127.0.0.1:1234/api/quiz.php', {
    type: 0,  
    id: TeacherLoginComponent.teacherId
    }).pipe(map((res: any) => {
      return res;
    }));
  }
  
  addQuiz(quiz:Quiz) {
    return this.http.post('http://127.0.0.1:1234/api/quiz.php', {
      type:2,
      id:quiz.id,
      tid:quiz.tid,
      questions:quiz.questions,
      subject:quiz.subject,
      topic:quiz.topic,
      timelimit:quiz.timelimit
    }).pipe(map((res:any)=>{
      return res;
    }));
  }

  getTeacherQuizes(){
    return this.http.post('http://127.0.0.1:1234/api/quiz.php',{
      type:4,
      tid:TeacherLoginComponent.teacherId
    }).pipe(map((res:Array<Quiz>)=>{
      return res;
    }));
  }

  getStudentList(){
    return this.http.post('http://127.0.0.1:1234/api/student.php',{
      type:1
    }).pipe(map((res:Array<Student>)=>{
      return res;
    }));
  }

  getTeacherList(){
    return this.http.post('http://127.0.0.1:1234/api/student.php',{
      type:2
    }).pipe(map((res:Array<Teacher>)=>{
      return res;
    }));
  }

  getQuizzes(){
    return this.http.post('http://127.0.0.1:1234/api/student.php',{
      type:3
    }).pipe(map((res:Array<Quiz>)=>{
      return res;
    }));
  }

  getTeacherQuizCount(tid:number){
    return this.http.post('http://127.0.0.1:1234/api/teacher.php', {
      type:1,
      tid:tid
    }).pipe(map((res:any)=>{
      return res;
    }));
  }

  updateQuizCount(){
    return this.http.post('http://127.0.0.1:1234/api/teacher.php', {
      type:2,
      tid:TeacherLoginComponent.teacherId
    });
  }

  getTeacherNameById(tid:number){
    return this.http.post('http://127.0.0.1:1234/api/teacher.php', {
      type:3,
      tid:tid
    }).pipe(map((res:any)=>{
      return res['name'];
    }));
  }

  getQuizById(id:number){
    return this.http.post('http://127.0.0.1:1234/api/quiz.php', {
      type:5,
      id:id
    }).pipe(map((res:any)=>{
      return res;
    }));
  }
}
