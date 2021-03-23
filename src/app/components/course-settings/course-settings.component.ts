import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from 'src/app/services/course-data.service';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss']
})
export class CourseSettingsComponent implements OnInit {
  courseId: string;
  courseData;

  form: FormGroup;

  availableHoles: any = [9, 18]

  constructor(
    private actRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    public fb: FormBuilder
    ) {
    this.courseId = this.actRoute.snapshot.params.id;

    this.form = fb.group({
      holes: [''],
      teeBoxes: [''],
      player1: [''],
      player2: [''],
      player3: [''],
      player4: ['']
    })
  }

  ngOnInit(): void {
    this.courseDataService.getId(this.courseId); // sends course id to the service so it can make API call

    this.courseDataService.sendGetRequest().subscribe((data: any[]) => { // grabs course data from service
      console.log(data);
      this.courseData = data;
    })
  }

}
