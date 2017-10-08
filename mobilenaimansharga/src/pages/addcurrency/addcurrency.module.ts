import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddcurrencyPage } from './addcurrency';

@NgModule({
  declarations: [
    AddcurrencyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddcurrencyPage),
  ],
})
export class AddcurrencyPageModule {}
