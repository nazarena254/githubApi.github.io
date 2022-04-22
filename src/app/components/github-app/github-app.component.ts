import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
// import { RepoService } from 'src/app/services/repo.service';


@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css'],
  providers: [UserService]
})
export class GithubAppComponent implements OnInit {
  profile: any = [];
  repos: any = [];
  info: any=[];
  username: any;
  display: any =true;
 
  constructor(private profileService:UserService) { 

    this.profileService.getUserInfo().subscribe(info => {
      console.log("repos.3" + info);
      this.info = info;
    });

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }

  ngOnInit(): void {}

  findUser() {  
    this.display = false
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });

    this.profileService.getRepos(this.username).subscribe((repos) => {
      console.log("repos.1" + repos);
      this.repos = repos;
    });

    this.profileService.getProfileInfo().subscribe((info) => {
      console.log("repos.2" + info);
      this.info = info;
    });
  }
   
}

