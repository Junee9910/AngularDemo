import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from '../core/models';
import { MembersService } from '../core/members.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  members: Member[];

  constructor( private membersService:MembersService) {
    this.members = [
      {
        id: 1,
        name: 'test',
        age: 20,
      },
      {
        id: 2,
        name: 'test2',
        age: 22,
      }
    ];
  }

  ngOnInit(): void {
this.getMembers();
  }

getMembers(){
  this.membersService.getMembers().subscribe;
}  
}
