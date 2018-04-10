import {AbstractTaskComponent} from '../abstract-task/abstract-task.component';

export class ComponentDirectoryEntry {
  moduleName: string;
  components: (typeof AbstractTaskComponent)[];

  constructor(module: string, components: (typeof AbstractTaskComponent)[]) {
    this.moduleName = module;
    this.components = components;
  }

}
