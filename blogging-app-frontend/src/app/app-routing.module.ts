import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserSaveComponent} from "./component/user-save/user-save.component";
import {UserListComponent} from "./component/user-list/user-list.component";
import {UserUpdateProfileComponent} from "./component/user-update-profile/user-update-profile.component";
import {BlogPostSaveComponent} from "./component/blog-post-save/blog-post-save.component";
import {BlogPostListComponent} from "./component/blog-post-list/blog-post-list.component";
import {BlogPostUpdateProfileComponent} from "./component/blog-post-update-profile/blog-post-update-profile.component";

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
      { path: 'getUserUpdate/:id', component: UserUpdateProfileComponent, pathMatch: 'full'}

    ]
  },
  {
    path: 'saveBlogPost',
    component: BlogPostSaveComponent,
    children: [
      {path: '', component: BlogPostSaveComponent, pathMatch: 'full'}

    ]
  },
  {
    path: 'getBlogPostList',
    component: BlogPostListComponent,
    children: [
      {path: '', component: BlogPostListComponent, pathMatch: 'full'}

    ]
  },
  {
    path: 'getBlogPostUpdate/:id',
    component: BlogPostUpdateProfileComponent,
    children: [
      { path: 'getBlogPostUpdate/:id', component: BlogPostUpdateProfileComponent, pathMatch: 'full'}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
