import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSaveComponent} from "./component/user-save/user-save.component";
import {UserListComponent} from "./component/user-list/user-list.component";
import {UserUpdateProfileComponent} from "./component/user-update-profile/user-update-profile.component";

const routes: Routes = [

  {
    path: '',
    component: UserSaveComponent,
    children: [
      {path: '', component: UserSaveComponent, pathMatch: 'full'}

    ]
  },
  {
    path: 'getUserList',
    component: UserListComponent,
    children: [
      {path: '', component: UserListComponent, pathMatch: 'full'}

    ]
  },

  {
    path: 'getUserUpdate/:id',
    component: UserUpdateProfileComponent,
    children: [
      { path: 'user-update/:id', component: UserUpdateProfileComponent, pathMatch: 'full'}

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
