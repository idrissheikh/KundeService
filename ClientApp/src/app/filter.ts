import { Pipe, PipeTransform } from '@angular/core';
import { OfteStilteSpoersmaal } from "./app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(faq: OfteStilteSpoersmaal[], ord: string): any {
    // Sjekk hvis søkeordet er udefinert
    if (!faq || !ord) {
      console.log("Tom");
      return null;
    }

    console.log("argument: " + ord);
    console.log("faq er: " + faq);

    // returner filtererte liste
    return faq.filter(f =>
      f.spoersmaal.toLowerCase().indexOf(ord.toLowerCase()) !== -1);
  }

}
