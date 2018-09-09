import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private appComponent: AppComponent) { 

	}

	ngOnInit() {
	}

	loginOption:string='/login/teacher';
	registerOption:string='/register/teacher'


	optionChanged(value:string){
		this.loginOption = '/login/'+value;
		this.registerOption = '/register/'+value;
	}

	login(){
		this.appComponent.navigate(this.loginOption);
	}
	register(){
		this.appComponent.navigate(this.registerOption);
	}

}
