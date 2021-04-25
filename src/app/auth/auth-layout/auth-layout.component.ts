import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent implements OnInit {

  dir = 'ltr'

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }


  toggleLanguage(){
    const currentLang = this.translate.currentLang
    currentLang == 'EN' ? this.translate.use('AR') : this.translate.use('EN')
    currentLang == 'EN' ? this.dir = "rtl" :  this.dir = "ltr";
  }

}
