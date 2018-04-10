import { Component, OnInit } from '@angular/core';
import {AbstractTaskComponent} from '../../abstract-task/abstract-task.component';

@Component({
  selector: 'app-theta',
  templateUrl: './theta.component.html',
  styleUrls: ['./theta.component.css']
})
export class ThetaComponent extends AbstractTaskComponent {

  constructor() {
    super();
  }

  static resolutionId(): string {
    return 'theta';
  }

  ngOnInit() {
  }

}
