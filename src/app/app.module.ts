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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
