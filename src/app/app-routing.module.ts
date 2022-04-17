import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { GithubAppComponent } from './components/github-app/github-app.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'github', component: GithubAppComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
