import { Component, OnInit } from '@angular/core';
import { SubmissionList } from '../../student/submitted-quiz/submitted-quiz.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-recent-submissions',
  templateUrl: './recent-submissions.component.html',
  styleUrls: ['./recent-submissions.component.css']
})
export class RecentSubmissionsComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  list: Array<SubmissionList> = [];
  ngOnInit() {
    this.getSubmissionList();
  }

  getSubmissionList() {
    this.commonService.getRecentSubmissions().subscribe(res => {
      if (res != null) {
        res.forEach(element => {
          this.commonService.getStudentNameById(element.tid).subscribe(res => {
            this.list.push(new SubmissionList(element, res));
          });
        });
      }
    });
  }

}
