import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonInfo} from '../../models/commonInfo';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import {CommonInfoService} from '../../services';

@Component({
  selector: 'app-common-info',
  templateUrl: './common-info.component.html',
  styleUrls: ['./common-info.component.css']
})
export class CommonInfoComponent implements OnInit {
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



}
