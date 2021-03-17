import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from 'src/app/services/course-data.service';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss']
})
export class CourseSettingsComponent implements OnInit {
  courseId: string;
  courseData = [];

  constructor(
    private actRoute: ActivatedRoute,
    private courseDataService: CourseDataService
    ) {
    this.courseId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.courseDataService.getId(this.courseId); // sends course id to the service so it can make API call

    this.courseDataService.sendGetRequest().subscribe((data: any[]) => { // grabs course data from service
      console.log(data);
      this.courseData = data;
    })
  }

}
