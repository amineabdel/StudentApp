import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  kleur: {};
  data: {};

  constructor(public navCtrl: NavController,private http: Http) {

     
  this.http.get('assets/data/brochureJobbeurs.json').map(res => res.json()).subscribe(data => {
    this.data = data;
    console.log(data);
    for(var i = 0; i < data.length;i++){
      data[i].Bedrijf;
      console.log(this.kleur = data[i].groen);
      
    }
    })

  }

 

}
