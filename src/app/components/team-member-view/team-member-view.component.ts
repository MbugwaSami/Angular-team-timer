import { Component, OnInit, Input } from '@angular/core';
import { members } from 'src/members';

@Component({
  selector: 'app-team-member-view',
  templateUrl: './team-member-view.component.html',
  styleUrls: ['./team-member-view.component.scss']
})
export class TeamMemberViewComponent implements OnInit {
  
  @Input() member;
  constructor() { }

  ngOnInit() {
  }

}
