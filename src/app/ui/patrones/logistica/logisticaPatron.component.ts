import { Component } from '@angular/core';

@Component({
  selector: 'logistica-patron',
  templateUrl: './logisticaPatron.component.html',
  styleUrls: ['./logisticaPatron.component.scss']
})
export class LogisticaPatronComponent {
  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
