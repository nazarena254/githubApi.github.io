import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
// import { RepoService } from 'src/app/services/repo.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GithubDirective } from './directives/github.directive';
import { GithubPipe } from './pipe/github.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    ProfileComponent,
    GithubDirective,
    GithubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  // providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
