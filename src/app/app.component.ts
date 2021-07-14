import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ABC';

  constructor(
    private translate: TranslateService,
    private authService: AuthService)
     {
    const lnaguages = ['EN', 'Ar'];
    translate.addLangs(lnaguages);
    translate.use('EN');
  }


  toggleLanguage(){
    const currentLang = this.translate.currentLang
    currentLang == 'EN' ? this.translate.use('AR') : this.translate.use('EN')
  }

  OnlogOut(){
    this.authService.logout();
  }

}
