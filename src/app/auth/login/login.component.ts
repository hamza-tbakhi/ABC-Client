import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  hide = true;

  signInForm = new FormGroup({
    emailAddressOrPhoneNo : new FormControl('' , [Validators.required]),
    password : new FormControl('' , [Validators.required])
  });

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
