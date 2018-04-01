import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {ComponentDirectoryService} from "../component-directory/component-directory.service";
import {TaskDirective} from "../task.directive";
import {TaskComponent} from "../task-component";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {


  @ViewChild(TaskDirective) task: TaskDirective;
  private componentRef: ComponentRef<TaskComponent>;

  constructor(private componentDirectory: ComponentDirectoryService,
              private factoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  private componentForTask(process: string, taskName: string) {
    let factory = this.factoryResolver.resolveComponentFactory(
      this.componentDirectory.componentByModuleAndName(process, taskName)
    );
    let viewContainerRef = this.task.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(factory);
    (<TaskComponent> this.componentRef.instance).variables = {message: "I am "};
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
