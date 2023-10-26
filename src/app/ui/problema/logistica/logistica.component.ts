import { Component } from '@angular/core';

@Component({
  selector: 'logistica',
  templateUrl: './logistica.component.html',
  styleUrls: ['./logistica.component.scss']
})
export class LogisticaComponent {
  selectedTab: number = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
