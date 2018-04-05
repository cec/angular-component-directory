import {AbstractTaskComponent} from '../abstract-task/abstract-task.component';
import {Type} from '@angular/core';

export class ComponentDirectoryEntry {
  moduleName: string;
  components: Type<AbstractTaskComponent>[];
}
