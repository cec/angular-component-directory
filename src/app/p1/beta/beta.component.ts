import { Component, OnInit } from '@angular/core';
import {AbstractTaskComponent} from '../../abstract-task/abstract-task.component';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent extends AbstractTaskComponent {

  constructor() {
    super();
  }

  static resolutionId(): string {
    return 'beta';
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
