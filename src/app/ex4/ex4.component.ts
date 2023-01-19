import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component {
  showModal: boolean = true;

  changeModal(){
    if (this.showModal == false){
      this.showModal = true
    }else
      this.showModal = false
  }

}
