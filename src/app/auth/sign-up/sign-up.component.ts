import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
 import { RegisterDTO } from 'src/app/shared/models/models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hidePassword = true;
  hideConfirmPassword = true;

  signUpForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('', [Validators.required , Validators.pattern("[0-9]{10}")]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  model: RegisterDTO = new RegisterDTO()


  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private notificationService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //Methods

  setModelValues() {
    this.model.userName = this.signUpForm.controls.userName.value;
    this.model.fullName = this.signUpForm.controls.fullName.value;
    this.model.email = this.signUpForm.controls.email.value;
    this.model.phoneNumber = this.signUpForm.controls.phoneNumber.value;
    this.model.password = this.signUpForm.controls.password.value;
  }

  //Events

  onSignUpClick() {
    this.spinner.show();
    this.setModelValues();
    if (this.signUpForm.controls.password.value !== this.signUpForm.controls.confirmPassword.value) {
      this.spinner.hide();
      this.notificationService.showNotification('Sign Up', 'Passwords do not match', 'error');
    }
    else {
      this.authService.register(this.model).subscribe(response => {
        this.spinner.hide();
        this.notificationService.showNotification('Sign Up', 'Sign Up completed please login to your account', 'success');
        this.router.navigate(['auth/login']);
      },error => {
        this.spinner.hide();
      });
      
    }
  }


}
