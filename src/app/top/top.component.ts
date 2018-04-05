import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {ComponentDirectoryService} from "../component-directory/component-directory.service";
import {TaskDirective} from "../task.directive";
import {TaskComponent} from "../task-component";
import {AbstractTaskComponent} from '../abstract-task/abstract-task.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {


  @ViewChild(TaskDirective) task: TaskDirective;
  private componentRef: ComponentRef<AbstractTaskComponent>;

  vars: any;

  constructor(private componentDirectory: ComponentDirectoryService,
              private factoryResolver: ComponentFactoryResolver) {
    this.vars = {a: 'ciao', b: 'X-zibit'};
  }

  ngOnInit() {
  }

  private componentForTask(process: string, taskName: string) {
    const factory = this.factoryResolver.resolveComponentFactory(
      this.componentDirectory.componentByModuleAndName(process, taskName)
    );
    const viewContainerRef = this.task.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(factory);
    (<AbstractTaskComponent> this.componentRef.instance).variables = {message: 'I am '};
  }


  public alpha() {
    this.componentForTask('p1', 'alpha');
  }

  public beta() {
    this.componentForTask('p1', 'beta');
  }

  public gamma() {
    this.componentForTask('p2', 'gamma');
  }

  public theta() {
    this.componentForTask('p2', 'theta');
  }

  submitChild() {
    this.componentRef.instance.submit();
  }
}
