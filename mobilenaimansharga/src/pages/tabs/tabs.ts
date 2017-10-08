import { Component } from '@angular/core';

import { CalculatePage } from '../calculate/calculate';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalculatePage;
  constructor() {

  }
}
