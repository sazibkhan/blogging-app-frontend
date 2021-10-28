import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserSignupApiService} from "../../service/usersignup.api.service";

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.css']
})
export class UserSaveComponent implements OnInit {

  userForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private  userSignupApiService : UserSignupApiService) {}


  public  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }



  get f() {
    return this.userForm.controls;
  }

  public onSubmit() {
    this.submitted = true;
      if (this.userForm.invalid) {
        }
      this.userSignupApiService.userSignUpService(
      this.f.username.value,
      this.f.email.value,
      this.f.password.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['adminGetList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken User Information';
          }
        });

  }

}
