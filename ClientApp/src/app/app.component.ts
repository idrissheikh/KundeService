import { Component } from '@angular/core';
//import { Sporsmaaler } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";
import { Headers } from "@angular/http";

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

  public OfteStilteSpoersmaal: OfteStilteSpoersmaal[];
  public Spoersmaalbetaling: OfteStilteSpoersmaal[];
  public SpoersmaalRegistrering: OfteStilteSpoersmaal[];

  visalle: boolean;
  laster: boolean;
  skjema: FormGroup;


  visAlleQ() {
    this.visKatogori = false;
    //this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;
    this.visalle = true;
    this.visRegistrering = false;

    this.hentalleSpoarsmaal();
  }

 

  tilbakeTilRegistrering() {
    this.visRegistrering = true;
    this.visKundeService = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;
    this.visalle = false;
    this.hentRegistrering();




  }


  goTilBetalling() {
    this.hentBetaling();
    this.visBetalling = true;
    //this.side = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;


  }

  LeggeSpoarsmaal() {
    //this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = true;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;


  }

  ngOnInit() {
    this.visKundeService = true;
    //this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visalle = false;

  }

  constructor(private _http: Http, private fb: FormBuilder) {
    this.skjema= fb.group({
      Id: [""],
      KundeNavn: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      Spoersmaal: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      Kategori: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      Svar: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],

    });

    this.hentalleSpoarsmaal();
    this.hentBetaling();
    this.hentRegistrering();

  }

  hentalleSpoarsmaal() {
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

  hentRegistrering() {
    this._http.get("api/Main/registrering")
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


}


export class Sporsmaaler {

  Id: number;
  KundeNavn: string;
  Spoersmaal: string;
  Svar: string;
  Email: string;

}

export class OfteStilteSpoersmaal {

  Id: number;
  KundeNavn: string;
  Kategori: string;
  Spoersmaal: string;
  Svar: string;
  Email: string;
}
