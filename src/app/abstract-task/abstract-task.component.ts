import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';


/*
 * Common super-class for all task components
 */
@Component({
  selector: 'app-abs-task',
  templateUrl: './abstract-task.component.html',
  styleUrls: ['./abstract-task.component.scss']
})
export abstract class AbstractTaskComponent implements OnInit {

  // from backend/variables
  @Input() public variables: any;

  @Output() public formStatusChanged = new EventEmitter<string>();

  // ref to contained form
  @ViewChild('form') form;

  static resolutionId(): string {
    throw new Error('Subclass Responsibility');
  }

  constructor() {
  }

  ngOnInit() {
    this.observeFormStatus();
  }

  public submit() {

  }

  private observeFormStatus() {
    this.form.statusChanges.subscribe(status => {
      const interestingStatuses = /^(VALID|INVALID)$/;
      if (interestingStatuses.test(status)) {
        this.formStatusChanged.emit(status);
      }
    });
  }

}
