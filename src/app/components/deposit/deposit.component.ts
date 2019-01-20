import {Component, OnInit} from '@angular/core';
import {Deposit} from '../../models/deposit';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonInfoService} from '../../services';
import {CommonInfo} from '../../models/commonInfo';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';

// const opts: HttpHeaders = {'Content-Type':'application/json'}

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  dep: Deposit = <Deposit>{};
  cI: CommonInfo;

  constructor(private http: HttpClient, private com: CommonInfoService) {
  }

  ngOnInit() {
    this.cI = this.com.getInfo();
    timer(5000, 3000).pipe(
      take(3000)).subscribe(x => {
      this.cI = this.com.getInfo();
    });
  }

  // TODO: add catching error
  deposit() {
    this.http.post('http://localhost:8080/deposit', JSON.stringify(this.dep)).subscribe((data: any) => {
    });
  }


}
