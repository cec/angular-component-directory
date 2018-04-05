import {InjectionToken, ModuleWithProviders, NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentDirectoryService} from './component-directory.service';
import {ComponentDirectoryEntry} from './component-directory-entry';
import {TaskComponent} from '../task-component';


export const DIRECTORY_ENTRIES = new InjectionToken<ComponentDirectoryEntry[]>('DIRECTORY_ENTRIES');
export type Entries = ComponentDirectoryEntry;

@NgModule({
  imports: [CommonModule]
})
export class ComponentDirectoryModule {

  /**
   * Call in app_module
   *
   * @param {Entries} entries
   * @returns {ModuleWithProviders}
   */
  static forRoot(entries: Entries): ModuleWithProviders {
    return {
      ngModule: ComponentDirectoryModule,
      providers: [
        provideComponentEntries(entries),
        {
          provide: ComponentDirectoryService, useFactory: setupDirectory, deps: [DIRECTORY_ENTRIES]
        }
      ]
    };
  }

  /**
   * Call in submodules so they can configure their entries
   */
  static forChild(entries: Entries): ModuleWithProviders {
    return {ngModule: ComponentDirectoryModule, providers: [provideComponentEntries(entries)]};
  }

  /**
   * Call in submodules so they can configure their entries
   */
  static forChildOld(entries: Entries): ModuleWithProviders {
    return {ngModule: ComponentDirectoryModule, providers: [provideComponentEntries(entries)]};
  }

  // static smartForChild(moduleName: string, components: Type<any>[]): ModuleWithProviders {
  //   return {ngModule: ComponentDirectoryModule, providers: [smartProvideComponentEntries(moduleName, components)]};
  // }
}


export function provideComponentEntries(entries: Entries): any {
  return [
    {provide: DIRECTORY_ENTRIES, multi: true, useValue: entries}
  ];
}


export function setupDirectory(config: ComponentDirectoryEntry[]): ComponentDirectoryService {
  return new ComponentDirectoryService(config);
}

/*
export function smartProvideComponentEntries(moduleName: string, components: Type<any>[]) {
  const entries: ComponentDirectoryEntry[] = components.map((c) => {
    // console.log(c.name);
    return {
      moduleName: moduleName,
      componentName: c.name,
      component: c
    };
  });
  return provideComponentEntries(entries);
}
*/

