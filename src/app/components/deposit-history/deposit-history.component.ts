import {Component, OnInit} from '@angular/core';
import {History} from '../../models/history';
import {HistoryService} from '../../services';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.css']
})
export class DepositHistoryComponent implements OnInit {
  displayedColumns: string[] = ['sum', 'date'];
  dataSource;

  constructor(private hist: HistoryService) {
    this.dataSource = this.getSpecificInfo('Deposit');
  }


  ngOnInit() {
    timer(2000, 2000).pipe(
      take(2000)).subscribe(x => {
      this.dataSource = this.getSpecificInfo('Deposit');
    });
  }

  getSpecificInfo(selector: string): History[] {
    const S: History[] = [];
    const r = this.hist.getAllInfo();
    for (let i = 0; i < r.length; i++) {
      if (selector === r[i].operation_type) {
        S.push(r[i]);
      }
    }
    return S;
  }

  getDateByDMY(timestamp: number) {
    timestamp = timestamp * 1000;
    const date: number = new Date(timestamp).getDate();
    const month: number = new Date(timestamp).getMonth() + 1;
    const year: number = new Date(timestamp).getFullYear();
    const hour: number = new Date(timestamp).getHours();
    const min: number = new Date(timestamp).getMinutes();
    return month + '/' + date + '/' + year + ' ' + hour + ':' + min;
  }

}
