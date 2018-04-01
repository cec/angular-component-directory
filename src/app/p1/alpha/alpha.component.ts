import { Component, OnInit } from '@angular/core';
import {TaskComponent} from "../../task-component";

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit, TaskComponent {
  variables: any;

  constructor() { }

  ngOnInit() {
    console.log((<any>AlphaComponent).__annotations__[0]);
  }

  submit() {
    console.log('Submitting Alpha')
  }


}
