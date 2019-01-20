import {Component, OnInit} from '@angular/core';
import {History} from '../../models/history';
import {MatTableDataSource} from '@angular/material';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import {HistoryService} from '../../services';


@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})

export class TransferHistoryComponent implements OnInit {
  h: History[] = [];
  displayedColumns: string[] = ['sum', 'who', 'date'];
  dataSource;

  constructor(private hist: HistoryService) {
    this.dataSource = this.h;
  }


  ngOnInit() {
    this.dataSource = this.h;
    const d = this.hist.getSpecificInfo('Transfer');
    if (d.length !== 0) {
      this.h = d;
    }
    timer(1000, 1000).pipe(
      take(1000)).subscribe(x => {
      this.dataSource = this.h;
      this.h = this.hist.getSpecificInfo('Transfer');
    });
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
