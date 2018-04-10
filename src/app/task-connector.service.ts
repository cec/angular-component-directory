import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

/* connects a task component with its driving parent component
*  parent responsibilities:
*   - subscribe to requests for input variables form the backend
*   - push input variables from backend
*   - subscribe to validation updates
*   - subscribe to output variables to submit to the backend
*   - push requests for output variables to submit to the backend
*
*  child responsibilities:
*   - push requests for input variables form the backend
*   - push validation updates
*   - push output variables to submit to the backend
*   - subscribe to input variables
*   - subscribe to requests for output variables to submit to the backend
*/
@Injectable()
export class TaskConnectorService {


  // parent push
  private inputVariablesQueue = new Subject<any>(); // evaluate simplifying with a behavior-subject
  inputVariables$ = this.inputVariablesQueue.asObservable();
  private outputVariablesRequestsQueue = new Subject<boolean>();
  outputVariablesRequests$ = this.outputVariablesRequestsQueue.asObservable();


  // child push
  private inputVariablesRequestsQueue = new Subject<boolean>();
  inputVariablesRequests$ = this.inputVariablesRequestsQueue.asObservable();
  private validationUpdatesQueue = new Subject<string>();
  validationUpdates$ = this.validationUpdatesQueue.asObservable();
  private outputVariablesQueue = new Subject<any>();
  outputVariables$ = this.outputVariablesQueue.asObservable();


  publishInputVariables(variables: any) {
    this.inputVariablesQueue.next(variables);
  }

  requestOutputVariables() {
    this.outputVariablesRequestsQueue.next(true);
  }

  requestInputVariables() {
    this.inputVariablesRequestsQueue.next(true);
  }

  publishValidationUpdate(newStatus: string) {
    this.validationUpdatesQueue.next(newStatus);
  }

  publishOutputVariables(variables: any) {
    this.outputVariablesQueue.next(variables);
  }

}
