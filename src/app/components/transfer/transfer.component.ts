import {Component, OnInit, ViewChildren} from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {TransferHistoryComponent} from '../transfer-history/transfer-history.component';
import {Transfer} from '../../models/transfer';
import {CommonInfo} from '../../models/commonInfo';
import {HttpClient} from '@angular/common/http';
import {CommonInfoService} from '../../services';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  @ViewChildren(DashboardComponent) dash: DashboardComponent;
  @ViewChildren(TransferHistoryComponent) ti: TransferHistoryComponent;
  tx: Transfer = <Transfer>{};
  cI: CommonInfo;

  public show = false;
  public buttonName: any = 'Show history';

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide history';
    } else {
      this.buttonName = 'Show history';
    }
  }

  constructor(private http: HttpClient, private com: CommonInfoService, private route: ActivatedRoute, private location: Location) {
    this.cI = this.com.getInfo();
  }

  transfer() {
    this.http.post('http://localhost:8080/transfer', JSON.stringify(this.tx)).subscribe((data: any) => {
    });
  }

  ngOnInit() {
    this.cI = this.com.getInfo();
    timer(5000, 3000).pipe(
      take(3000)).subscribe(x => {
      this.cI = this.com.getInfo();
    });
  }

  goBack(): void {
    this.location.back();
  }
}
