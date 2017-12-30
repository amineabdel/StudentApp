import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  data:{};
  Bedrijf: string;
  Email: string;
  Contact:string;
  Adres:string;
  Post:any;
  Gemeente:string;
  Telefoon:string;
  Standnr:any;
  Sector:string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.param();
  }

  param(){
    this.Bedrijf = this.navParams.get("Bedrijf");
    this.Sector = this.navParams.get("Sector");
    this.Contact = this.navParams.get("Contact");
    this.Adres = this.navParams.get("Adres");
    this.Post = this.navParams.get("Post");
    this.Gemeente = this.navParams.get("Gemeente");
    this.Telefoon = this.navParams.get("Telefoon");
    this.Standnr = this.navParams.get("Standnr");
    this.Email = this.navParams.get("Email");
  }



}
