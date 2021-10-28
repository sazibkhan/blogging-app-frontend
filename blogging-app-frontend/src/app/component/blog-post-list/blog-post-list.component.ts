import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserSignupApiService} from "../../service/usersignup.api.service";
import {BlogPostApiService} from "../../service/blogpost.api.service";

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  searchText: any;
  blogPostForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  getBlogPostList: Array<any> = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private  blogPostApiService : BlogPostApiService) { }


  public ngOnInit(): void {
    this.getUserProfile();
  }

  get f(){
    return this.blogPostForm
  }

  public onSubmit(){
    this.submitted=true;
    if(this.blogPostForm.invalid){
    }
    console.log("Show Data SuccessFull ");

  }


  public getUserProfile() {
    this.blogPostApiService.getBlogPostList().subscribe(res => {
      res.forEach((userGetInformation: any) => {
        this.getBlogPostList.push(userGetInformation);
      });

    });
  }


  public onClickBlogPostEdit(id:any){
    this.router.navigate(['getBlogPostUpdate'+'/'+id]);
  }


  public onClickBlogPostDelete(id:any){
    this.blogPostApiService.deleteBlogPostById(id).subscribe(res => {
      this.router.navigate(['/saveBlogPost']);
    });
  }

}
