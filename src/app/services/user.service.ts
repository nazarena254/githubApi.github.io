import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { count } from 'console';
// import { catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor(private http:HttpClient) { }
  private user: any;
  private username: string;
  private _Url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {this.username = 'nazarena254';}

  ngOnInit() {
    // GET request with response type <any>
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.username = data.total;
      console.log(this.username);
    });
  }
  //get profile info
  getUserInfo() {
    return this.http.get('https://api.github.com/users/' + this.username); }
  //get repo information
  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.username + '/repos'
    );  }

  getProfiles() {
    return this.http.get<any[]>(this._Url);  }

  getProfileInfo(){  
    return this.http.get('https://api.github.com/users/'+this.username+'?acess_token='+environment.apiKey);    }   
  
  getRepos(user: any){
    let userrepo = 
    this.http.get('https://api.github.com/users/'+this.username+'/repos?acess_token='+environment.apiKey); 
    console.log(userrepo)
    return userrepo    
  }
  updateProfile(username:string){
    this.username = username;
  }
 
}
