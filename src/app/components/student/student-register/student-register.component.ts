import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register(event){
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector(".input_name").value;
  	const emailid = target.querySelector(".input_email").value;
  	const password = target.querySelector(".input_password").value;
    this.authService.register(name, emailid, password,'student').subscribe(data=>{
      console.log(data);
    });
  }

}
