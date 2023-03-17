import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Repo } from '../models/repo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  username: string = 'sunguti-albright';

  GIT_API_URL: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) {}

  SearchGithubUsers(): Observable<User> {
    return this.http.get<User>(this.GIT_API_URL + this.username);
  }
  // getUsers(): Observable<User> {
  //   return this.http.get<User>(this.GIT_API_URL + this.username);
  // }

  getPublicRepos(): Observable<Repo> {
    return this.http.get<Repo>(this.GIT_API_URL + this.username + '/repos');
  }
  UpdateUser(githubUser: string) {
    this.username = githubUser;
  }
}
