import {Inject, Injectable, Type} from '@angular/core';
import {ComponentDirectoryEntry} from './component-directory-entry';

@Injectable()
export class ComponentDirectoryService {

  private nullEntry: ComponentDirectoryEntry;

  constructor(@Inject('DIRECTORY_ENTRIES') private entries: ComponentDirectoryEntry[]) {
    this.nullEntry = {moduleName: '0', components: [] };
  }

  public componentByModuleAndName(moduleName: string, componentName: string): Type<any> {
    const entryForModule = this.entries.find(e => e.moduleName === moduleName) || this.nullEntry;
    const match = entryForModule.components.find(c => c.cn() === componentName);

    if (typeof match === 'undefined') {
      console.log(`cannot find component ${componentName} in module ${moduleName} ... dumping known components...`);
      console.log(this.entries);
      // TODO understand how to handle unknown components (aka a fallback component named NullComponent)
    }
    else {
      return match;
    }
  }

  flatten<T>(arr: T[][]): T[] {
    return Array.prototype.concat.apply([], arr);
  }
}
