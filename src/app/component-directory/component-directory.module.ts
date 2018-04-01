import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentDirectoryService} from "./component-directory.service";
import {ComponentDirectoryEntry} from "./component-directory-entry";


export const DIRECTORY_ENTRIES = new InjectionToken<ComponentDirectoryEntry[][]>('DIRECTORY_ENTRIES');
export type Entries = ComponentDirectoryEntry[];

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
        {
          provide: ComponentDirectoryService, useFactory: setupDirectory, deps: [DIRECTORY_ENTRIES]
        },
        provideComponentEntries(entries)
      ]
    };
  }

  /**
   * Call in submodules so they can configure their entries
   */
  static forChild(entries: Entries): ModuleWithProviders {
    return {ngModule: ComponentDirectoryModule, providers: [provideComponentEntries(entries)]};
  }


}



export function provideComponentEntries(entries: Entries): any {
  return [
    {provide: DIRECTORY_ENTRIES, multi: true, useValue: entries}
  ];
}


export function setupDirectory(config: ComponentDirectoryEntry[][]): ComponentDirectoryService {
  return new ComponentDirectoryService(flatten(config));
}

export function flatten<T>(arr: T[][]): T[] {
  return Array.prototype.concat.apply([], arr);
}