import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent{

  data1: string = 'Data';
  data2: string = 'Data';
  data3: string = 'Data';

  dell = {
    'brand': 'Dell',
    'color': 'grey'
  }

  buyLaptop = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 10000);
  })

  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  fetch1() {
    this.data1 = 'Fetching Data..';
    this.buyLaptop.then(res => {
      console.log(res);
      this.data1 = JSON.stringify(res);
    })    
  }

  async fetch2(){
    this.data2 = 'Fetching Data..';

    let res = await this.buyLaptop;
    this.data2 = JSON.stringify(res);
  }

  fetch3(){
    this.data3 = 'Fetching data..';

    this.buyLaptop2.then(res => {
      console.log(res);
      this.data3 = JSON.stringify(res);
    })
  }

}
