import { Component } from '@angular/core';
//import { Sporsmaaler } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";
import { Headers } from "@angular/http";
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visKatogori: boolean;
  visRegistrering: boolean;
  visKundeService: boolean;
  visBetalling: boolean;
  stillspoarsmaal: boolean;
  visKundeQ: boolean;
  numberOfLikes: number = 0;
  sokeOrd: string;
 

  public OfteStilteSpoersmaal: OfteStilteSpoersmaal[];
  public Spoersmaalbetaling: OfteStilteSpoersmaal[];
  public SpoersmaalRegistrering: OfteStilteSpoersmaal[];
  public Sporsmaaler: Sporsmaaler[];


  visalle: boolean;
  laster: boolean;
  skjema: FormGroup;


  visAlleQ() {
    //this.visKatogori = false;
    //this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;
    this.visalle = true;
    this.visRegistrering = false;
    this.visKundeQ = false;

    this.hentalleSpoarsmaal();
  }



  tilbakeTilRegistrering() {
    this.hentRegistrering();
    this.visRegistrering = true;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;
    this.visalle = false;
    this.visKundeQ = false;


  }


  goTilBetalling() {
    this.hentBetaling();
    this.visBetalling = true;
    //this.side = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;
    this.visKundeQ = false;



  }

  visAlleKudeQ() {
    this.hentKundeSpoarsmaaler();
  
    this.visKundeQ = true;
    this.visBetalling = false;
    //this.side = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;



  }

  LeggeSpoarsmaal() {
    //this.skjema.setValue({
    //  Id: "",
    //  KundeNavn: "",
    //  Spoersmaal: "",
    //  Email: "",
    //  Svar: ""

    //});
    this.skjema.markAsPristine();
    this.visBetalling = false;
    this.stillspoarsmaal = true;
    this.visKundeQ = false;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;
    this.visKundeQ = false;



  }

  hentKundeSpoarsmaaler() {
    this._http.get("/api/Main/AlleSporsmaaler")
      .map(retur => retur.json())
      .subscribe(result => {
        console.log(result);
        this.Sporsmaaler = result;
        console.log("etter api kallet " + this.Sporsmaaler.length);
        this.visKundeQ = true;
      });
   
     
/*
 *
 *   this.laster = false;
            this.visKundeQ = true;
            this.visKatogori = false;
            this.visBetalling = false;
            this.stillspoarsmaal = false;
            this.visRegistrering = false;
            this.visKundeService = false;
            this.visalle = false;*/
  };


  lagreSpoarsmaal() {

    var lageretSpoersmaaler = new Sporsmaaler();

    lageretSpoersmaaler.kundeNavn = this.skjema.value.kundeNavn;
    lageretSpoersmaaler.email = this.skjema.value.email;
    lageretSpoersmaaler.spoersmaal = this.skjema.value.spoersmaal;

  
    var body: string = JSON.stringify(lageretSpoersmaaler);
    var headers = new Headers({ "Content-Type": "application/json" });

    this._http.post("api/Main/LeggTil", body, { headers: headers })
      //.map(returData => returData.toString())
      .subscribe(
        retur => {
          this.visKundeQ = true;
          this.visKatogori = false;
          //this.side = false;
          this.visBetalling = false;
          this.stillspoarsmaal = false;
          this.visRegistrering = false;
          this.visKundeService = false;
          this.visalle = false;



        },
        error => alert(error),
      () => console.log("ferdig post-api/kundeSporsmaaler")
      );
  }



  /* her bruker jeg  ngOnIt() metode som viser bare KundeService div og  andre  diver blir deaktiv*/
  ngOnInit() {
    this.visKundeService = true;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visalle = false;
    this.visKundeQ = false;

    //this.hentKundeSpoarsmaaler();

  }

  constructor(private _http: Http, private fb: FormBuilder) {
    this.skjema = fb.group({
      id: [""],
      kundeNavn: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      spoersmaal: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      email: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],



    });

    this.hentalleSpoarsmaal();
    this.hentBetaling();
    this.hentRegistrering();
  


  }
  /*dette   henter alle ofte Spørsmåler som er deklaret i DBInit */ 
  hentalleSpoarsmaal() {
    console.log("hentAlleSpørsmål - DONe");
    this._http.get("api/Main/Index")
      .subscribe(result => {
        this.OfteStilteSpoersmaal = [];
        console.log(result);
        if (result) {
          for (let spm of result.json()) {
            this.OfteStilteSpoersmaal.push(spm);
            this.laster = false
              ;
          }
        };
      });
  };
    /*dette   henter Registrering spørsmåler som er deklaret i DBInit */

  hentRegistrering() {
    this._http.get("api/Main/HentRegistrering")
      .subscribe(result => {
        this.SpoersmaalRegistrering = [];
        console.log(result);
        if (result) {
          for (let rob of result.json()) {
            this.SpoersmaalRegistrering.push(rob);
            this.laster = false;

            //this.visBetalling = true;

            //this.hentalleSpoarsmaal();

          }
        };
      });
  };
      /*dette   henter betaliing spørsmåler som er deklaret i DBInit */

  hentBetaling() {
    this._http.get("api/Main/betaling")
      .subscribe(result => {
        this.Spoersmaalbetaling = [];
        console.log(result);
        if (result) {
          for (let sob of result.json()) {
            this.Spoersmaalbetaling.push(sob);
            this.laster = false;

            //this.visBetalling = true;

            //this.hentalleSpoarsmaal();

          }
        };
      });
  };


  vedLike(id, faq) {
    console.log("vedlike: jeg ble trykket ");

    return this._http.put("/api/Main/VedLike", faq)
      .map(returData => returData.json())
      .subscribe(retur => {
        this.hentBetaling();
      });
  }

  vedDislike(id, faq) {
    console.log("veddislike: jeg ble trykket ");
    return this._http.put("/api/Main/VedDisLike/", faq)
      .map(returData => returData.json())
      .subscribe(retur => {
        this.hentBetaling();
      });
  
  }

}
//  likeButtonClick() {
//    this.numberOfLikes++;
//  }

//  DislikeButtonClick() {
//    this.numberOfLikes++;
//  }
//}


export class Sporsmaaler {

  id: number;
  kundeNavn: string;
  spoersmaal: string;
  email: string;
  
  


}

export class OfteStilteSpoersmaal {

  Id: number;
  Kategori: string;
  Spoersmaal: string;
  Svar: string;
  Email: string;
  Like: number;
  DisLike: number;

}
