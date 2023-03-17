import { Component, OnInit } from '@angular/core';
import{User} from '../../models/user';
import{Repo} from '../../models/repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // user!: User[];
  // repo: Repo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
