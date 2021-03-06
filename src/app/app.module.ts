import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';
import { StudentRegisterComponent } from './components/student/student-register/student-register.component';
import { TeacherRegisterComponent } from './components/teacher/teacher-register/teacher-register.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { CommonService } from './services/common.service';
import { HttpModule } from '@angular/http';
import { CreateQuizComponent } from './components/teacher/create-quiz/create-quiz.component';
import { TeacherQuizesComponent } from './components/teacher/teacher-quizes/teacher-quizes.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TeacherProfileComponent } from './components/teacher/teacher-profile/teacher-profile.component';
import { RecentSubmissionsComponent } from './components/teacher/recent-submissions/recent-submissions.component';
import { StudentListComponent } from './components/teacher/student-list/student-list.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { QuizListComponent } from './components/student/quiz-list/quiz-list.component';
import { AttemptQuizComponent } from './components/student/attempt-quiz/attempt-quiz.component';
import { SubmittedQuizComponent } from './components/student/submitted-quiz/submitted-quiz.component';
import { TeacherListComponent } from './components/student/teacher-list/teacher-list.component';
import { ViewQuestionComponent } from './components/student/view-question/view-question.component';
import { CountdownModule } from 'ngx-countdown';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    TeacherLoginComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    TeacherRegisterComponent,
    HomeComponent,
    TeacherDashboardComponent,
    CreateQuizComponent,
    TeacherQuizesComponent,
    TeacherProfileComponent,
    RecentSubmissionsComponent,
    StudentListComponent,
    StudentDashboardComponent,
    StudentProfileComponent,
    QuizListComponent,
    AttemptQuizComponent,
    SubmittedQuizComponent,
    TeacherListComponent,
    ViewQuestionComponent,
  ],
  imports: [
    PerfectScrollbarModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    CountdownModule,
  ],
  providers: [AuthService, CommonService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
