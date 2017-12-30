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


  bm = "Bedrijfsmanagement"
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
        this.groen = this.data[i].groen;
        this.geel = this.data[i].geel;
        this.rood = this.data[i].rood;
        this.blauw = this.data[i].blauw;
        this.wit = this.data[i].wit;

        let dataOpleiding = this.data[i]["Opleiding"];


        if (this.groen == "WAAR" && this.geel == "WAAR" && this.rood == "WAAR" && this.blauw == "WAAR" && this.wit == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.multi,this.graf,this.wet,this.tech,this.ti,this.elec,this.gez,this.ond);
    
        } else if (this.groen == "WAAR" && this.geel == "WAAR" && this.rood == "WAAR" && this.wit == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.multi,this.graf,this.wet,this.tech,this.gez,this.ond);
        } else if (this.groen == "WAAR" && this.geel == "WAAR" && this.rood == "WAAR" && this.blauw == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.multi,this.graf,this.wet,this.tech,this.ti,this.elec);
        } else if (this.geel == "WAAR" && this.rood == "WAAR" && this.blauw == "WAAR" && this.wit == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.multi,this.graf,this.wet,this.tech,this.ti,this.elec,this.gez,this.ond);

        }  else if (this.groen == "WAAR" && this.rood == "WAAR" && this.blauw == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.wet,this.tech,this.ti,this.elec);
        } else if (this.groen == "WAAR" && this.geel == "WAAR" && this.blauw == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.multi,this.graf,this.ti,this.elec);
        } else if (this.geel == "WAAR" && this.rood == "WAAR" && this.blauw == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.multi,this.graf,this.wet,this.tech,this.ti,this.elec);
        } else if (this.groen == "WAAR" && this.geel == "WAAR" && this.wit == "WAAR" && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.multi,this.graf,this.gez,this.ond);
        } 

        else if (this.geel == "WAAR" && this.blauw == "WAAR"  && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.multi,this.graf,this.ti,this.elec);
        } else if (this.rood == "WAAR" && this.blauw == "WAAR"  && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.wet,this.tech,this.ti,this.elec);
        } else if (this.groen == "WAAR" && this.blauw == "WAAR"  && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.ti,this.elec);
        } else if (this.groen == "WAAR" && this.wit == "WAAR"  && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.gez,this.ond);
        } else if (this.groen == "WAAR" && this.rood == "WAAR"  && dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com,this.wet,this.tech);
        } 

        else if (this.blauw == "WAAR" &&  dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.ti,this.elec);
        } else if (this.groen == "WAAR" &&  dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.bm,this.om,this.com);
        } else if (this.rood == "WAAR" &&  dataOpleiding == "") {
          this.data[i]["Opleiding"].push(this.wet,this.tech);
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
