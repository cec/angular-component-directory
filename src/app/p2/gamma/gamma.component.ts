import { Component, OnInit } from '@angular/core';
import {AbstractTaskComponent} from '../../abstract-task/abstract-task.component';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent extends AbstractTaskComponent {

  constructor() {
    super();
  }

  static resolutionId(): string {
    return 'gamma';
  }

  ngOnInit() {
    super.ngOnInit()
  }

}
