import { Component, OnInit } from '@angular/core';
import { CourseDataService } from 'src/app/services/course-data.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss']
})
export class CourseSelectComponent implements OnInit {

  courses = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[]) => { // grabs courses from service
      this.courses = data;
    })
  }

}
