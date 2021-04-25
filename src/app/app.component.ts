import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BusinessCity';


  constructor(private translate: TranslateService) {
    const lnaguages = ['EN', 'Ar'];
    translate.addLangs(lnaguages);
    translate.use('EN');
  }


}
