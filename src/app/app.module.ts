import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoureseListComponent } from './components/cources/courese-list.component';
import { WelcomeComponent } from './components/welcome/welcome-component.component';
import { CourseDetailsComponent } from './components/cources/course-details.component';
import { AddCourseComponent } from './components/cources/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoureseListComponent,
    WelcomeComponent,
    CourseDetailsComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'courses', component: CoureseListComponent },
      { path: 'course/:id', component: CourseDetailsComponent },
      { path: 'create', component: AddCourseComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
