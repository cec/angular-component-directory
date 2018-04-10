import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TaskConnectorService} from '../task-connector.service';


/*
 * Common super-class for all task components
 */
@Component({
  selector: 'app-abs-task',
  templateUrl: './abstract-task.component.html',
  styleUrls: ['./abstract-task.component.scss']
})
export class AbstractTaskComponent implements OnInit {

  // from backend/variables
  @Input() public variables: any;

  // ref to contained form
  @ViewChild('form') form;

  static resolutionId(): string {
    throw new Error('Subclass Responsibility');
  }

  constructor() {
  }

  // constructor(private connector: TaskConnectorService) {
  // }

  ngOnInit() {
    // this.observeFormStatus();
    // this.observeConnectorRequests();
  }

  public submit() {

  }

  private observeFormStatus() {
    // const interestingStatuses = /^(VALID|INVALID)$/;
    // this.form.statusChanges.subscribe(status => {
    //   if (interestingStatuses.test(status)) {
    //     this.connector.publishValidationUpdate(status);
    //   }
    // });
  }

  private observeConnectorRequests() {
    // this.connector.variablesReuquests$.subscribe(r => {
    //     return {a: 1, b: 2};
    //   }
    // );
  }
}
