import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDataService } from 'src/app/services/course-data.service';
import { PlayerSettingsService } from 'src/app/services/player-settings.service';

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

  errorMessage: string;

  constructor(
    private route: Router,
    private actRoute: ActivatedRoute,
    private courseDataService: CourseDataService,
    public fb: FormBuilder,
    private playerSettingsService: PlayerSettingsService
    ) {
    this.courseId = this.actRoute.snapshot.params.id;

    this.form = fb.group({
      holes: [''],
      teebox: [''],
      player1: [''],
      player2: [''],
      player3: [''],
      player4: ['']
    })
  }

  ngOnInit(): void {
    this.courseDataService.getId(this.courseId); // sends course id to the service so it can make API call

    this.courseDataService.sendGetRequest().subscribe((data: any[]) => { // grabs course data from service
      console.log(data)
      this.courseData = data;
    })
  }

  submitForm() {
    this.playerSettingsService.playerSettings = this.form.value;

    console.log(this.form.value)

    if (this.form.value.player1 == '' && this.form.value.player2 == '' && this.form.value.player3 == '' && this.form.value.player4 == '') {
      this.errorMessage = "There needs to be at least one player to play (duh)"
    } else if (this.form.value.player1 == (this.form.value.player2 || this.form.value.player3 || this.form.value.player4) || this.form.value.player2 == (this.form.value.player1 || this.form.value.player3 || this.form.value.player4) || this.form.value.player3 == (this.form.value.player1 || this.form.value.player2 || this.form.value.player4)) {
      this.errorMessage = "Players can't have the same name"
    } else {
      this.route.navigate(['/scorecard/', this.courseId])
    }
  }

}
