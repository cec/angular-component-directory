import {Inject, Injectable, Type} from '@angular/core';
import {ComponentDirectoryEntry} from './component-directory-entry';

@Injectable()
export class ComponentDirectoryService {

  private entries: ComponentDirectoryEntry[];

  constructor(@Inject('DIRECTORY_ENTRIES') private config: ComponentDirectoryEntry[][]) {
    this.entries = this.flatten(config);
  }

  public componentByModuleAndName(moduleName: string, componentName: string): Type<any> {
    const match = this.entries.find(e => e.moduleName === moduleName && e.componentName === componentName);
    if (typeof match === 'undefined') {
      console.log(`cannot find component ${componentName} in module ${moduleName} ... dumping known components...`);
      console.log(this.entries);
      // TODO understand how to handle unknown components (aka a fallback component named NullComponent)
    }
    else
      return match.component;
  }

  flatten<T>(arr: T[][]): T[] {
    return Array.prototype.concat.apply([], arr);
  }
}
