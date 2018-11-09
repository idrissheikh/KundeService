import { Component } from '@angular/core';
//import { Sporsmaaler } from '@angular/core';
import { StilleSpoarsmaalComponent } from './stille-spoarsmaal/stille-spoarsmaal.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 @Component({
    selector: 'app-registrering',
    templateUrl: 'registrering/registrering.component.html',
    styleUrls: ['registrering/registrering.component.css']
})


export class AppComponent {
  title = 'app';
  visKatogori: boolean;
  side: boolean;
  visRegistrering: boolean;
  visKundeService: boolean;
  visBetalling: boolean;
  stillspoarsmaal: boolean;



  visKategoriSide() {
    this.visKatogori = false;
    this.side = true;
    this.visBetalling = false;
    this.stillspoarsmaal = false;


  }

  tilbaketilKategori() {
    this.visKatogori = true;
    this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;


  }

  tilbakeTilRegistrering() {
    this.visRegistrering = true;
    this.visKundeService = false;
    this.visBetalling = false;
    this.stillspoarsmaal = false;


  }


  goTilBetalling() {
    this.visKatogori = false;
    this.side = false;
    this.visBetalling = true;
    this.stillspoarsmaal = false;
    this.visRegistrering = false;


  }

  LeggeSpoarsmaal() {
    this.visKatogori = false;
    this.side = false;
    this.visBetalling = false;
    this.stillspoarsmaal = true;
    this.visRegistrering = false;

  }
}


