import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedQuizComponent } from './submitted-quiz.component';

describe('SubmittedQuizComponent', () => {
  let component: SubmittedQuizComponent;
  let fixture: ComponentFixture<SubmittedQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
