import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (LanguageLoader),
    //     deps: [HttpClient]
    //   }
    // }) ,
    HomePageRoutingModule,
    TranslateModule.forChild()

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
