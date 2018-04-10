import {InjectionToken, ModuleWithProviders, NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentDirectoryService} from './component-directory.service';
import {ComponentDirectoryEntry} from './component-directory-entry';
import {TaskComponent} from '../task-component';

// token to inject entries
export const DIRECTORY_ENTRIES = new InjectionToken<ComponentDirectoryEntry[]>('DIRECTORY_ENTRIES');

@NgModule({
  imports: [CommonModule]
})
export class ComponentDirectoryModule {

  /**
   * Call in AppModule
   */
  static forRoot(entry: ComponentDirectoryEntry): ModuleWithProviders {
    return {
      ngModule: ComponentDirectoryModule,
      providers: [
        provideComponentEntries(entry),
        {
          provide: ComponentDirectoryService, useFactory: setupDirectory, deps: [DIRECTORY_ENTRIES]
        }
      ]
    };
  }

  /**
   * Call in submodules so they can configure their entries
   */
  static forChild(entry: ComponentDirectoryEntry): ModuleWithProviders {
    return {ngModule: ComponentDirectoryModule, providers: [provideComponentEntries(entry)]};
  }

}

export function provideComponentEntries(entry: ComponentDirectoryEntry): any {
  return [
    {provide: DIRECTORY_ENTRIES, multi: true, useValue: entry}
  ];
}


export function setupDirectory(config: ComponentDirectoryEntry[]): ComponentDirectoryService {
  return new ComponentDirectoryService(config);
}
