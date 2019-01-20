import {Injectable} from '@angular/core';
import {CommonInfo} from '../../models/commonInfo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonInfoService {

  cI: CommonInfo = <CommonInfo>{};

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
    this.http.get('http://localhost:8080/common').subscribe((data: any) => {
      this.cI.contractAddress = data.contract_address;
      this.cI.contractBalance = data.contract_balance;
      this.cI.verifierPlasmaBalance = data.verifier_plasma_balance;
      this.cI.verifierEtherBalance = data.verifier_ether_balance;
      this.cI.latestBlock = data.latest_block;
      this.cI.verifierInputs = data.verifier_inputs;
      console.log(new Date().getSeconds());
    });
  }

  getInfo(): CommonInfo {
    return this.cI;
  }
}
