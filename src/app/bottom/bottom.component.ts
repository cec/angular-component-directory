import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  @Input() variables: any;
  public x: any;

  constructor() {
  }

  ngOnInit() {
    this.x = this.variables.b;
    console.log(this);
  }

}
