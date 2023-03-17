// export class User {
//   constructor(
//     id: number,
//     public name: string,
//     public username: string,
//     public login: string,
//     public bio: string,
//     public followers: number,
//     public following: number,
//     public public_repos: number,
//     public avatar_url: string,
//     public html_url: string
//   ) {}
// }
export interface User {
  id: number;
  name: string;
  username: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
}
