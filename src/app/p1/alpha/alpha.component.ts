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
  }

  submit() {
    console.log('Submitting Alpha');
  }


}
