import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // imgPath = "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80";
  public info:any = [];
  public repos:any = [];
  public profiles: any = []
 
  constructor(private RepositoryService:UserService) { 

      this.RepositoryService.getUserInfo().subscribe(info => {
        console.log(info);
        this.info = info;
      });
      this.RepositoryService.getUserRepos().subscribe(repos => {
        console.log("repo" + repos);
        this.repos=repos;
      });
   }
  
  ngOnInit(): void {
    this.RepositoryService.getProfiles().subscribe((data)=> {
      this.profiles = data;
      console.log(data)
    })
  }

}
