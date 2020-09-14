import { Component } from '@angular/core';
import { TranslateConfigServiceService } from '../translate-config-service.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Categories : any;
  Category : any ;
  selectedLanguage:string = 'ar';

  constructor(private translateConfigService: TranslateConfigServiceService , private CategoryService : CategoryService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    // this.Categories.push('Clothes')
    // this.Categories.push('Food')
    // this.Categories.push('Drinks')
    // this.Categories.push('Tools')
    this.CategoryService.GetCatygories().subscribe(p=>{
      this.Categories = p;
    })
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
