import { Component } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  email = "mylumia640@gmail.com";

  onKeyUp(value) {
    this.email=value;
    console.log(value);
  }

  LogEmail() {
    console.log(this.email);
  }
}