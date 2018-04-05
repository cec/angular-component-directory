import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  static cn() {
    return 'beta';
  }

  constructor() { }

  ngOnInit() {
  }

}
