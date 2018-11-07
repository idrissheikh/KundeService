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
  //visKatogori: boolean;
  //side: boolean;

  //visKategoriSide() {
  //  this.visKatogori = false;
  //  this.side = true;

  //}

  //tilbaketilKategori() {
  //  this.visKatogori = true;
  //  this.side = false;
  //}



}


