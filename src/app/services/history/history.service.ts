import {Injectable} from '@angular/core';
import {History} from '../../models/history';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private h: History[] = [];

  constructor(private http: HttpClient) {
    this.requestInfo();
    this.updateInfo();
  }

  async updateInfo() {
    setInterval(() => {
      this.requestInfo();
    }, 3000);
  }

  requestInfo() {
    this.h = [];
    this.http.get('http://localhost:8080/history').subscribe((data: any) => {
      for (let i = 0; i < data.Events.length; i++) {
        this.h.push(data.Events[i]);
      }
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
