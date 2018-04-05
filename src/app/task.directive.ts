import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-task]'
})
export class TaskDirective {



  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
