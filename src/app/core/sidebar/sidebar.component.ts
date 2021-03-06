import { Component, OnInit } from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  today: string;
  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}
