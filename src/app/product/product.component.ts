import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  kontenLayanan: boolean = false


jaminanButton(){
  this.kontenLayanan = false
}

konsultanButton(){
 this.kontenLayanan = true
}

}
