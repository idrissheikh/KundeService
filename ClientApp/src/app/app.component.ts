import { Component } from '@angular/core';
//import { Sporsmaaler } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visKatogori: boolean;
  side: boolean;
  visRegistrering: boolean;
  visKundeService: boolean;
  visBetalling: boolean;
  stillspoarsmaal: boolean;
  public ofteStrilteSpoersmaal: OfteStilteSpoersmaal[];
  skjema: FormGroup

  visKategoriSide() {
    this.visKatogori = false;
    this.side = true;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;



  }

  tilbaketilKategori() {
    this.visKatogori = true;
    this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;



  }

  tilbakeTilRegistrering() {
    this.visRegistrering = true;
    this.visKundeService = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visKundeService = false;


  }


  goTilBetalling() {
    this.visKatogori = false;
    this.side = false;
    this.visBetalling = true;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
    this.visKundeService = false;

  }

  LeggeSpoarsmaal() {
    this.visKatogori = false;
    this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = true;
    this.visRegistrering = false;
    this.visKundeService = false;

  }

  ngOnInit() {
    this.visKundeService = true;
    this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;
  }

  constructor(private _http: Http, private fb: FormBuilder) {
    this.skjema = fb.group({
      Id: [""],
      KundeNavn: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      Spoersmaal: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
      Email: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
    });

    this.hetalleSpoarsmaal();

  }

  hetalleSpoarsmaal() {
    this._http.get("api/Main/Index")
      .subscribe(result => {
        this.ofteStrilteSpoersmaal = [];
        console.log(result);
        if (result) {
          for (let spm of result.json()) {
            this.ofteStrilteSpoersmaal.push(spm);
          }
        };
      });
};
}


export class Sporsmaaler {

  Id: number;
  KundeNavn: string;
  Spoersmaal: string;
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
