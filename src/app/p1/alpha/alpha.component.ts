import { Component, OnInit } from '@angular/core';
import {AbstractTaskComponent} from '../../abstract-task/abstract-task.component';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent extends AbstractTaskComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  submit() {
    console.log('Submitting Alpha');
  }


}
