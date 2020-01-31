import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from './courses.interface';
import { CoursesService } from 'src/app/api/courses/courses.api';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  constructor(
    private routes: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ) {}
  course: ICourse;
  ngOnInit() {
    this.courseService
      .getCourse(+this.routes.snapshot.paramMap.get('id'))
      .subscribe({
        next: course => (this.course = course)
      });
  }

  onBackClick() {
    this.router.navigate(['/courses']);
  }
}
