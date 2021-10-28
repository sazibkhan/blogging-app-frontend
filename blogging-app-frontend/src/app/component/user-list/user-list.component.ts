import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserSignupApiService} from "../../service/usersignup.api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchText: any;
  userListForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  getListUser: Array<any> = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private  userSignupApiService : UserSignupApiService) { }


  public ngOnInit(): void {
    this.getUserProfile();
  }

  get f(){
    return this.userListForm
  }

  public onSubmit(){
    this.submitted=true;
    if(this.userListForm.invalid){
    }
    console.log("Show Data SuccessFull ");

  }


  public getUserProfile() {
    this.userSignupApiService.getUserList().subscribe(res => {
      res.forEach((userGetInformation: any) => {
        this.getListUser.push(userGetInformation);
      });

    });
  }


  public onClickUserEdit(id:any){
    this.router.navigate(['getUserUpdate'+'/'+id]);
  }


  public onClickUserDelete(id:any){
    this.userSignupApiService.userDeleteById(id).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

}
