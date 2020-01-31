import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICourse } from 'src/app/components/cources/courses.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private coursesUrl = 'app/api/courses/courses.json';

  getCoursesList(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.coursesUrl).pipe(
      tap(data => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error Occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  getCourse(id: number): Observable<ICourse> {
    return this.getCoursesList().pipe(
      map(courses => courses.filter(course => +course.id === id)[0])
    );
  }
}
