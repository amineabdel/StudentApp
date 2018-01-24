import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CompanySearchPipe } from '../../pipes/company-search/company-search';
import { DetailsPage } from '../details/details';

import 'rxjs/add/operator/map'


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  data: {};

  groen: string;
  geel: string;
  rood: string;
  blauw: string;
  wit: string;


  bm = "Bedrijfsmanagement";
  om = "Office Management";
  com = "Communicatie";
  multi = "ICT Multimedia";
  graf = "Grafische en Digitale Media";
  wet = "Wetenschappen";
  tech = "Techniek";
  ti = "Toegepaste Informatica";
  elec = "Electronica ICT";
  gez = "Gezondheid";
  ond = "Onderwijs";


  constructor(public navCtrl: NavController, private http: Http, private loadingCtrl: LoadingController) {
    this.getData();
  }

  async getData() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
    this.http.get('https://abdelfamine.cloudant.com/jobbeurs/bedrijfsId').map(res => res.json()).subscribe(data => {
      this.data = data["companies"];
      for (var i = 0; i < data["companies"].length; i++) {

        if (this.data[i].groen == "WAAR") {
          this.data[i]["Opleiding"].push(this.bm, this.om, this.com);
        }

        if (this.data[i].geel == "WAAR") {
          this.data[i]["Opleiding"].push(this.multi, this.graf);
        }

        if (this.data[i].rood == "WAAR") {
          this.data[i]["Opleiding"].push(this.wet, this.tech);
        }

        if (this.data[i].blauw == "WAAR") {
          this.data[i]["Opleiding"].push(this.ti, this.elec);
        }

        if (this.data[i].wit == "WAAR") {
          this.data[i]["Opleiding"].push(this.gez, this.ond);
        }
      }
    })
  }

  goToDetails(Bedrijf, Email, Contact, Adres, Post, Gemeente, Telefoon, Standnr, Sector) {
    this.navCtrl.push(DetailsPage, {
      Bedrijf, Email, Contact,
      Adres, Post, Gemeente,
      Telefoon, Standnr, Sector
    });
  }




}
