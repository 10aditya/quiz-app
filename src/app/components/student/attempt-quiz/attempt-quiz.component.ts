import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {

  quizId: number;
  constructor(private route: ActivatedRoute,private router: Router, private service: CommonService) { }

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.getQuizById();
  }

  getQuizById(){
    this.service.getQuizById(this.quizId).subscribe(res =>{
      console.log(res);
    });
  }

}
