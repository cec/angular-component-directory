import {Inject, Injectable, Type} from '@angular/core';
import {ComponentDirectoryEntry} from './component-directory-entry';
import {AbstractTaskComponent} from '../abstract-task/abstract-task.component';

@Injectable()
export class ComponentDirectoryService {

  // TODO: consider if we can somehow use this as fallback or if we should throw an error
  private nullEntry: ComponentDirectoryEntry;

  constructor(@Inject('DIRECTORY_ENTRIES') private entries: ComponentDirectoryEntry[]) {
    this.nullEntry = {moduleName: '0', components: [] };
  }

  public componentByModuleAndName(moduleName: string, componentName: string): (typeof AbstractTaskComponent) {
    const entryForModule = this.entries.find(e => e.moduleName === moduleName) || this.nullEntry;
    const match = entryForModule.components.find(c => c.resolutionId() === componentName);

    if (typeof match === 'undefined') {
      console.log(`cannot find component ${componentName} in module ${moduleName} ... dumping known components...`);
      console.log(this.entries);
      // TODO understand how to handle unknown components (aka a fallback component named NullComponent)
    }
    else {
      return match;
    }
  }

}
