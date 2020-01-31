import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  courseName: string;
  description: string;
  courseDuration: string;
  price: string;
  author: string;
  courseLevel: string;
  type: string;

  constructor() {}

  addCourse(event) {
    console.log(event);
  }

  handleLevelChange(event) {
    console.log(event);
  }

  ngOnInit() {}
}
