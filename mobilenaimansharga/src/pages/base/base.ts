import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {ContactPage} from '../contact/contact';
import {CalculatePage} from '../calculate/calculate';

@Component({
  templateUrl: 'base.html'
})
export class BasePage {

  public homePage = HomePage;
  public contactPage = ContactPage;
  public calculatePage = CalculatePage;
  constructor() {
  }
}
