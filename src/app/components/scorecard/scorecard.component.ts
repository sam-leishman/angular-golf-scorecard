import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/player';
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
  players: Player[] = [];

  playerHoles: string[] = ['hole1', 'hole2', 'hole3', 'hole4', 'hole5', 'hole6', 'hole7', 'hole8', 'hole9', 'hole10', 'hole11', 'hole12', 'hole13', 'hole14', 'hole15', 'hole16', 'hole17', 'hole18'];

  displayTable: boolean = false;

  isUnder: boolean;

  constructor(
    private route: Router,
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

    if (this.playerSettingsService.playerSettings == undefined) {
      this.route.navigate(['/settings/', this.courseId])
    } else {
      this.courseData = this.courseDataService;
      this.holeAmount = this.playerSettingsService.playerSettings.holes;
      this.teebox = this.playerSettingsService.playerSettings.teebox - 1;

      if (this.playerSettingsService.playerSettings.player1 != '') {
        this.players.push({
          name: this.playerSettingsService.playerSettings.player1,
          hole1: 0,
          hole2: 0,
          hole3: 0,
          hole4: 0,
          hole5: 0,
          hole6: 0,
          hole7: 0,
          hole8: 0,
          hole9: 0,
          hole10: 0,
          hole11: 0,
          hole12: 0,
          hole13: 0,
          hole14: 0,
          hole15: 0,
          hole16: 0,
          hole17: 0,
          hole18: 0
        })
      }
      if (this.playerSettingsService.playerSettings.player2 != '') {
        this.players.push({
          name: this.playerSettingsService.playerSettings.player2,
          hole1: 0,
          hole2: 0,
          hole3: 0,
          hole4: 0,
          hole5: 0,
          hole6: 0,
          hole7: 0,
          hole8: 0,
          hole9: 0,
          hole10: 0,
          hole11: 0,
          hole12: 0,
          hole13: 0,
          hole14: 0,
          hole15: 0,
          hole16: 0,
          hole17: 0,
          hole18: 0
        })
      }
      if (this.playerSettingsService.playerSettings.player3 != '') {
        this.players.push({
          name: this.playerSettingsService.playerSettings.player3,
          hole1: 0,
          hole2: 0,
          hole3: 0,
          hole4: 0,
          hole5: 0,
          hole6: 0,
          hole7: 0,
          hole8: 0,
          hole9: 0,
          hole10: 0,
          hole11: 0,
          hole12: 0,
          hole13: 0,
          hole14: 0,
          hole15: 0,
          hole16: 0,
          hole17: 0,
          hole18: 0
        })
      }
      if (this.playerSettingsService.playerSettings.player4 != '') {
        this.players.push({
          name: this.playerSettingsService.playerSettings.player4,
          hole1: 0,
          hole2: 0,
          hole3: 0,
          hole4: 0,
          hole5: 0,
          hole6: 0,
          hole7: 0,
          hole8: 0,
          hole9: 0,
          hole10: 0,
          hole11: 0,
          hole12: 0,
          hole13: 0,
          hole14: 0,
          hole15: 0,
          hole16: 0,
          hole17: 0,
          hole18: 0
        })
      }
    }

  }

  // yards

  getTotalOutYards(): number {
    let holesArr = this.courseData.data.holes;
    let totalYards = 0;
    for (let i = 0; i < 9; i++) {
      totalYards += holesArr[i].teeBoxes[this.teebox].yards;
    }
    return totalYards;
  }

  getTotalInYards(): number {
    let holesArr = this.courseData.data.holes;
    let totalYards = 0;
    for (let i = 9; i < 18; i++) {
      totalYards += holesArr[i].teeBoxes[this.teebox].yards;
    }
    return totalYards;
  }

  // getTotalYards(): number {
  //   let holesArr = this.courseData.data.holes;
  //   let totalYards = 0;
  //   for (let i = 0; i < holesArr.length; i++) {
  //     totalYards += holesArr[i].teeBoxes[this.teebox].yards;
  //   }
  //   return totalYards;
  // }

  // par

  getTotalOutPar(): number {
    let holesArr = this.courseData.data.holes;
    let totalPar = 0;
    for (let i = 0; i < 9; i++) {
      totalPar += holesArr[i].teeBoxes[this.teebox].par;
    }
    return totalPar;
  }

  getTotalInPar(): number {
    let holesArr = this.courseData.data.holes;
    let totalPar = 0;
    for (let i = 9; i < 18; i++) {
      totalPar += holesArr[i].teeBoxes[this.teebox].par;
    }
    return totalPar;
  }

  getTotalPar(): number {
    let holesArr = this.courseData.data.holes;
    let totalPar = 0;
    for (let i = 0; i < holesArr.length; i++) {
      totalPar += holesArr[i].teeBoxes[this.teebox].par;
    }
    return totalPar;
  }

  // player score

  getTotalOut(player: Player): number {
    return player.hole1 + player.hole2 + player.hole3 + player.hole4 + player.hole5 + player.hole6 + player.hole7 + player.hole8 + player.hole9;
  }

  getTotalIn(player: Player): number {
    return player.hole10 + player.hole11 + player.hole12 + player.hole13 + player.hole14 + player.hole15 + player.hole16 + player.hole17 + player.hole18;
  }

  getTotal(player: Player): number {

    let playerTotal = player.hole1 + player.hole2 + player.hole3 + player.hole4 + player.hole5 + player.hole6 + player.hole7 + player.hole8 + player.hole9 + player.hole10 + player.hole11 + player.hole12 + player.hole13 + player.hole14 + player.hole15 + player.hole16 + player.hole17 + player.hole18;

    let holesArr = this.courseData.data.holes;
    let totalPar = 0;
    if (this.holeAmount == 9) {
      for (let i = 0; i < 9; i++) {
        totalPar += holesArr[i].teeBoxes[this.teebox].par;
      }
    } else if (this.holeAmount == 18) {
      for (let i = 0; i < holesArr.length; i++) {
        totalPar += holesArr[i].teeBoxes[this.teebox].par;
      }
    }

    if ((playerTotal - totalPar) <= 0) {
      this.isUnder = true;
    } else {
      this.isUnder = false;
    }

    return playerTotal;
    
  }



  finishCard() {
    this.displayTable = true;
  }

  getDifference(player: Player): number {

    let holesArr = this.courseData.data.holes;
    let totalPar = 0;
    if (this.holeAmount == 9) {
      for (let i = 0; i < 9; i++) {
        totalPar += holesArr[i].teeBoxes[this.teebox].par;
      }
    } else if (this.holeAmount == 18) {
      for (let i = 0; i < holesArr.length; i++) {
        totalPar += holesArr[i].teeBoxes[this.teebox].par;
      }
    }

    let playerTotal = player.hole1 + player.hole2 + player.hole3 + player.hole4 + player.hole5 + player.hole6 + player.hole7 + player.hole8 + player.hole9 + player.hole10 + player.hole11 + player.hole12 + player.hole13 + player.hole14 + player.hole15 + player.hole16 + player.hole17 + player.hole18;

    return (playerTotal - totalPar);
  }

}
