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
  visKundeQ: boolean;

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
    this.lagreSpoarsmaal()
    this.visKundeQ = true;
    this.visBetalling = false;
    //this.side = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;

  }

  LeggeSpoarsmaal() {
    this.skjema.setValue({
      Id: "",
      KundeNavn: "",
      Spoersmaal: "",
      Email: "",
      Svar: ""

    });
    //this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = true;
    this.visKundeQ = false;
    this.visRegistrering = false;
    this.visKundeService = false;
    this.visalle = false;


  }


  lagreSpoarsmaal() {

    var lageretSpoersmaaler = new Sporsmaaler();

    lageretSpoersmaaler.KundeNavn = this.skjema.value.KundeNavn;
    lageretSpoersmaaler.Email = this.skjema.value.Email;
    lageretSpoersmaaler.Spoersmaal = this.skjema.value.Spoersmaal;

    var body: string = JSON.stringify(lageretSpoersmaaler);
    var headers = new Headers({ "Content-Type": "application/json" });

    this._http.post("api/Main/AlleSporsmaaler", body, { headers: headers })
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
      () => console.log("ferdig post-api/Main/AlleSporsmaaler")
      );
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
      Svar: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      Email: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],



    });

    this.hentalleSpoarsmaal();
    this.hentBetaling();
    this.hentRegistrering();
    this.hentKundeSpoarsmaaler();
    this.lagreSpoarsmaal();


  }

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

  hentKundeSpoarsmaaler() {
    console.log("hentAlleSpørsmål - DONe");
    this._http.get("api/Main/alleSporsmaaler")
      .subscribe(result => {
        this.Sporsmaaler = [];
        console.log(result);
        if (result) {
          for (let spm of result.json()) {
            this.Sporsmaaler.push(spm);
            this.laster = false
              ;
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
