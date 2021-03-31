import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDataService } from 'src/app/services/course-data.service';
import { PlayerSettingsService } from 'src/app/services/player-settings.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  courseId: string;
  courseData;

  holeAmount;
  teebox;
  players = [];

  constructor(
    private actRoute: ActivatedRoute,
    private playerSettingsService: PlayerSettingsService,
    private courseDataService: CourseDataService
  ) {
    this.courseId = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.courseDataService.getId(this.courseId);

    this.courseDataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.courseData = data;
    })

    console.log(this.playerSettingsService.playerSettings)
    this.courseData = this.courseDataService;
    this.holeAmount = this.playerSettingsService.playerSettings.holes;
    this.teebox = this.playerSettingsService.playerSettings.teebox - 1;

    if (this.playerSettingsService.playerSettings.player1 != '') {
      this.players.push(this.playerSettingsService.playerSettings.player1)
    }
    if (this.playerSettingsService.playerSettings.player2 != '') {
      this.players.push(this.playerSettingsService.playerSettings.player2)
    }
    if (this.playerSettingsService.playerSettings.player3 != '') {
      this.players.push(this.playerSettingsService.playerSettings.player3)
    }
    if (this.playerSettingsService.playerSettings.player4 != '') {
      this.players.push(this.playerSettingsService.playerSettings.player4)
    }
  }

}
