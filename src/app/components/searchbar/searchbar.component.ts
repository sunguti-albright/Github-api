import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from '../../user';
import { Repo } from '../../repo';
import { ApiInterface } from './api.interface';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  githubProfile!: User;

  username: any;
  repo: any ;

  // SearchUsers() {
  //   this.userService.UpdateUser(this.username);
  //   this.userService.SearchGithubUsers().subscribe((repo) => {
  //     this.githubProfile = repo;
  //     console.log(this.githubProfile);
  //   });

    // this.userService.getPublicRepos().subscribe((data) => {
    //   (this.repo = data), console.log(this.repo);
    // });
    
  }

  // name = new FormControl('', Validators.required);

  // get name() { return this.form.get('name'); }

  // constructor(private userService: ApiService) {}

  // ngOnInit(): void {
  //   this.userService.SearchGithubUsers().subscribe((repo) => {
  //     this.githubProfile = repo;
  //     console.log(this.githubProfile);
  //   });

    // this.userService.getPublicRepos().subscribe((data) => {
    //   (this.repo = data), console.log(this.repo);
    // });
  }
}
