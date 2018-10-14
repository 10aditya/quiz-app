import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './components/student/student-login/student-login.component';
import { StudentRegisterComponent } from './components/student/student-register/student-register.component';
import { TeacherRegisterComponent } from './components/teacher/teacher-register/teacher-register.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherDashboardComponent } from './components/teacher/teacher-dashboard/teacher-dashboard.component';
import { CreateQuizComponent } from './components/teacher/create-quiz/create-quiz.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { AttemptQuizComponent } from './components/student/attempt-quiz/attempt-quiz.component';
const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'login/teacher',
		component: TeacherLoginComponent
	},
	{
		path: 'login/student',
		component: StudentLoginComponent
	},
	{
		path: 'register/student',
		component: StudentRegisterComponent
	},
	{
		path: 'register/teacher',
		component: TeacherRegisterComponent
	},
	{
		path: 'teacher/dashboard',
		component: TeacherDashboardComponent
	},
	{
		path: 'teacher/addquiz',
		component: CreateQuizComponent
	},
	{
		path: 'student/dashboard',
		component: StudentDashboardComponent
	}, 
	{
		path: 'quiz/:id',
		component:AttemptQuizComponent
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}