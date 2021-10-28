import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSaveComponent } from './component/user-save/user-save.component';
import {NgbAlertModule, NgbModalModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './component/user-list/user-list.component';
import { UserUpdateProfileComponent } from './component/user-update-profile/user-update-profile.component';
import { BlogPostSaveComponent } from './component/blog-post-save/blog-post-save.component';
import { BlogPostListComponent } from './component/blog-post-list/blog-post-list.component';
import { BlogPostUpdateProfileComponent } from './component/blog-post-update-profile/blog-post-update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSaveComponent,
    UserListComponent,
    UserUpdateProfileComponent,
    BlogPostSaveComponent,
    BlogPostListComponent,
    BlogPostUpdateProfileComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
