import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('hu');
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrl: './nav.component.css'
// })
// export class NavComponent {
//   switchLang(lang: string): void {
//     console.log(`Nyelv váltása: ${lang}`);}
// }
