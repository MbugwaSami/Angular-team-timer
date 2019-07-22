import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { members } from 'src/members';

@Component({
  selector: 'app-team-member-view',
  templateUrl: './team-member-view.component.html',
  styleUrls: ['./team-member-view.component.scss']
})
export class TeamMemberViewComponent implements OnInit {
  
  @Input() member;
  @Output() selectedMember = new EventEmitter();
  @Output() deletedMember = new EventEmitter();
  timer;
  timeLeft: number = 60;
  isClicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  deleteMember(key: any): void {
    this.deletedMember .emit(key);
  }

  startTimer() {
  this.timer = setInterval(() => {
      if(this.timeLeft > 0) {
        this.isClicked= true;
        this.timeLeft--;
      }
    },1000)
  }

  stopTimer() {
    this.isClicked= false;
    clearInterval(this.timer)
  }

  pauseTimer() {
    clearInterval(this.timer)
  }

  resumeTimer() {

  }

  handleMemberClick(key) {
    this.selectedMember.emit(key);
    if(!this.isClicked){
      this.startTimer()
    }
    else{
      this.stopTimer()
    }
  }

  handleMemberPause() {
    if(this.isClicked) {
    }
  }
  
}
