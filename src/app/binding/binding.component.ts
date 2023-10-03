import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
titre : string ="demo du data binding interpolation";
status : boolean =false;
nom : string="batata ben ali"

changertitre(){
  this.titre = "nouveau titre!"
}
}
