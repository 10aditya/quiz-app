import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerTeacher(event){
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector(".input_name").value;
  	const emailid = target.querySelector(".input_email").value;
  	const password = target.querySelector(".input_password").value;
    this.authService.register(name, emailid, password,'teacher').subscribe(data=>{
      console.log(data);
    });
  }

}
