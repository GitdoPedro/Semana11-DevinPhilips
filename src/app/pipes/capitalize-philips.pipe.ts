import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePhilips'
})
export class CapitalizePhilipsPipe implements PipeTransform {

  transform(value: string): string {
    let fraseDividida = value.split(" ")
    for (var i = 0; i < fraseDividida.length; i++) {
      fraseDividida[i] = fraseDividida[i].charAt(0).toUpperCase() + fraseDividida[i].slice(1);
    }

    let fraseFinal = fraseDividida.join(" ")

    return fraseFinal

  }

}
