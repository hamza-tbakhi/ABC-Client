import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  hidePassword = true;
  hideConfirmPassword = true;

  signUpForm = new FormGroup({
    emailAddress : new FormControl('' , [Validators.required]),
    firstName : new FormControl('' , [Validators.required]),
    secondName : new FormControl('' , [Validators.required]),
    thirdName : new FormControl('' , [Validators.required]),
    fourthName : new FormControl('' , [Validators.required]),
    password : new FormControl('' , [Validators.required]),
    confirmPassword : new FormControl('' , [Validators.required]),
  });

  useInfoForm = new FormGroup({
    jobTitle : new FormControl('' , [Validators.required]),
    companyName : new FormControl('' , [Validators.required]),
    companyLastName : new FormControl('' , [Validators.required]),
    address : new FormControl('' , [Validators.required]),
    addressLastName : new FormControl('' , [Validators.required]),
    phoneNumber : new FormControl('' , [Validators.required]),


  })


  constructor() { }



  ngOnInit(): void {
  }







goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){

//implement api integration to sign up



    stepper.next();
}

}
