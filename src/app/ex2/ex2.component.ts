import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component {
  page: string = ""

  direciona(value:string){
    this.page = value
    console.log(this.page)
  }

}
