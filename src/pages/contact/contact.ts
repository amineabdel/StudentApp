import {Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CompanySearchPipe } from '../../pipes/company-search/company-search';

import 'rxjs/add/operator/map'


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  

  data:{};
  

  constructor(public navCtrl: NavController,private http: Http,private loadingCtrl: LoadingController) {
    this.getData();
  }

  async getData(){
    this.http.get('https://abdelfamine.cloudant.com/jobbeurs/bedrijfsId').map(res => res.json()).subscribe(data => {
      this.data = data["companies"];
      for( var i = 0; i< data["companies"].length;i++){
         this.data[i];
         }
     })
  }




  

  
}
