import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { resetPasswordSteps } from 'src/app/shared/enums/enums';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {

  currentStep : number = resetPasswordSteps.enterEmail;
  showEmail = true;
  showMobileNumber = false;

  emailValue: string = "";
  mobileNumberValue: string = "";

  codeNumbersArr = [
    {id : "1" , value : ""},
    {id : "2" , value : ""},
    {id : "3" , value : ""},
    {id : "4" , value : ""},
    {id : "5" , value : ""},
    {id : "6" , value : ""},
  ]

  hidePassword = true;
  hideConfirmPassword = true;

  updatePasswordForm :  FormGroup

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updatePasswordForm = this.formBuilder.group({
      newPassword : new FormControl(null,[Validators.required]),
      repeatPassword : new FormControl(null,[Validators.required]),
    })
  }


  radioChange(value) {
    if (value == 1) {
      this.showEmail = true;
      this.showMobileNumber = false;
      this.mobileNumberValue = ""
    } else {
      this.showMobileNumber = true;
      this.showEmail = false;
      this.emailValue = ""
    }
  }


  setEmailValue(value) {
    this.emailValue = value;
    console.log(value);
  }

  setMobileNumberValue(value) {
    this.mobileNumberValue = value;
    console.log(value);
  }

  onResetClick(){
    this.currentStep = resetPasswordSteps.enterConfirmationCode
  }

  validateCodeNumber(event) {
    if(event.target.value) {
      let value : string = event.target.value.toString().slice(-1);
      (<HTMLInputElement>document.getElementById(event.target.id)).value = value;
      this.codeNumbersArr.find(x => x.id == event.target.id).value = value;

      if(event.target.id < 6)
       document.getElementById((parseInt(event.target.id) + 1).toString()).focus()

      var isCompleted = true;
      for (let item of this.codeNumbersArr) {
        if(item.value == ""){
          isCompleted = false;
          break
        }
      }

      if(isCompleted) {
        var code = ''
        for (let item of this.codeNumbersArr) {
          code += item.value;
          }
          console.log(code);
          this.currentStep = resetPasswordSteps.updatePassword
      }

    } else {
      (<HTMLInputElement>document.getElementById(event.target.id)).value = ""
      this.codeNumbersArr.find(x => x.id == event.target.id).value = "";
    }
  }

  backToEmail(){
    this.resetConfirmationCodeEntry();
    this.currentStep = resetPasswordSteps.enterEmail;
  }

  resetConfirmationCodeEntry(){
    this.codeNumbersArr = [
      {id : "1" , value : ""},
      {id : "2" , value : ""},
      {id : "3" , value : ""},
      {id : "4" , value : ""},
      {id : "5" , value : ""},
      {id : "6" , value : ""},
    ]

    for(var i = 1 ; i <= 6 ; i++) {
      (<HTMLInputElement>document.getElementById(i.toString())).value = ""
    }
  }
}
