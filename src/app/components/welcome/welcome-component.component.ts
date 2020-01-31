import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}

  redirectToCoursesPage() {
    this.route.navigate(['/courses']);
  }
}
