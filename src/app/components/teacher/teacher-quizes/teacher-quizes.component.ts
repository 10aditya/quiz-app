import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Quiz } from '../../../models/Quiz';

@Component({
  selector: 'app-teacher-quizes',
  templateUrl: './teacher-quizes.component.html',
  styleUrls: ['./teacher-quizes.component.css']
})
export class TeacherQuizesComponent implements OnInit {

  quizes: Array<Quiz>;
  nums: number[] = [];
  maps: P[]=[];
  constructor(private commonService: CommonService) {

  }

  ngOnInit() {
    this.getTeacherQuizes();
  }

  getTeacherQuizes() {
    this.commonService.getTeacherQuizes().subscribe(res => {
      if (res != null) {
        this.quizes = res;
        var c = this.quizes.length;
        var i = 0;
        this.quizes.forEach(element => {
          this.maps.push(new P(c, element));
          i++;
          c--;
        });
      }
      // console.log(this.nums);
    });
  }

}

export class P {
  id: number;
  quiz:Quiz;
  constructor(id:number, quiz:Quiz){
    this.id = id;
    this.quiz = quiz;
  }
}
