import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { Component, Inject, LOCALE_ID } from '@angular/core';
import { StyleModeService } from './header/style-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NeeTechs';
  LoginURL = environment.LoginURL;
  constructor(@Inject(LOCALE_ID) public localeId: string, public styleModeService: StyleModeService,private titleService: Title){
    this.titleService.setTitle($localize`${this.title}`,);
  }
  ngOnInit(): void {
    console.log(environment)
  }
}

