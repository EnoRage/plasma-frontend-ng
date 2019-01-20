import {Component, OnInit, ViewChildren} from '@angular/core';
import {CommonInfoComponent, DashboardComponent, DepositComponent, PlasmaComponent} from '..';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @ViewChildren(DashboardComponent) D: DashboardComponent;
  @ViewChildren(DepositComponent) Dp: DepositComponent;
  @ViewChildren(CommonInfoComponent) Cm: CommonInfoComponent;
  @ViewChildren(PlasmaComponent) P: PlasmaComponent;
  constructor() { }

  ngOnInit() {
  }

}
