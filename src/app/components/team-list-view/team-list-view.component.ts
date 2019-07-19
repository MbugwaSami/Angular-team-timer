import { Component, OnInit } from '@angular/core';
import { members } from 'src/members';


@Component({
  selector: 'app-team-list-view',
  templateUrl: './team-list-view.component.html',
  styleUrls: ['./team-list-view.component.scss']
})
export class TeamListViewComponent implements OnInit {

  teamMembers = [];
  constructor() { }

  ngOnInit() {
    this.teamMembers = members
    console.log(this.teamMembers)
  }
}
