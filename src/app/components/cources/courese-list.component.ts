import { Component, OnInit } from '@angular/core';
import { ICourse } from './courses.interface';
import { CoursesService } from '../../api/courses/courses.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courese-list',
  templateUrl: './courese-list.component.html',
  styleUrls: ['./courese-list.component.scss']
})
export class CoureseListComponent implements OnInit {
  coursesList: ICourse[];
  pageTitle = 'Courses List';
  errorMessage = '';

  constructor(private service: CoursesService, private router: Router) {}

  ngOnInit() {
    this.service.getCoursesList().subscribe({
      next: courses => (this.coursesList = courses),
      error: err => (this.errorMessage = err)
    });
  }

  redirectToCreateCourse() {
    this.router.navigate(['create']);
  }
}
