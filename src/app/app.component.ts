import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    `
    .glyphicon{
      color:red;
    }
    .glyphicon-active{
      background:black;
    }
    `
  ]
})
export class AppComponent {
  @Input()  title = 'This is my TITLE';
  @Input() isClicked=true;
}
