import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherQuizesComponent } from './teacher-quizes.component';

describe('TeacherQuizesComponent', () => {
  let component: TeacherQuizesComponent;
  let fixture: ComponentFixture<TeacherQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
