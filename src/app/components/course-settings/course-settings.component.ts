import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss']
})
export class CourseSettingsComponent implements OnInit {

  courses = [];

  constructor() { }

  ngOnInit(): void {
  }

}
