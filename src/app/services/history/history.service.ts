import {Injectable} from '@angular/core';
import {History} from '../../models/history';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private h: History[] = [];
  private oldLen: number;

  constructor(private http: HttpClient) {
    this.oldLen = 0;
    this.requestInfo();
    this.updateInfo();
  }

  async updateInfo() {
    setInterval(() => {
      this.requestInfo();
    }, 2000);
  }

  requestInfo() {
    this.http.get('http://localhost:8080/history').subscribe((data: any) => {
      for (let i = this.oldLen; i < data.Events.length; i++) {
        this.h.push(data.Events[i]);
      }
      this.oldLen = data.Events.length;
    });
  }

  getSpecificInfo(selector: string): History[] {
    const S: History[] = [];
    for (let i = 0; i < this.h.length; i++) {
      if (selector === this.h[i].operation_type) {
        S.push(this.h[i]);
      }
    }
    return S;
  }

  getAllInfo(): History[] {
    return this.h;
  }
}
