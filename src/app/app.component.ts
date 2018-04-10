import {Component, Type} from '@angular/core';
import {ComponentDirectoryService} from "./component-directory/component-directory.service";
import {AbstractTaskComponent} from './abstract-task/abstract-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public names: string[] = ['alpha', 'beta', 'gamma', 'theta'];
  constructor(private directory: ComponentDirectoryService ) {
  }

  public getC(name: string): (typeof AbstractTaskComponent) {
    return this.directory.componentByModuleAndName('p1', name);
  }
}
