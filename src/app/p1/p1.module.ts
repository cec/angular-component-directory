import {ANALYZE_FOR_ENTRY_COMPONENTS, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphaComponent} from './alpha/alpha.component';
import {BetaComponent} from './beta/beta.component';
import {ComponentDirectoryModule} from '../component-directory/component-directory.module';

const MODULE_NAME = 'p1';

const entries = [
  {moduleName: MODULE_NAME, componentName: 'alpha', component: AlphaComponent},
  {moduleName: MODULE_NAME, componentName: 'beta', component: BetaComponent}
];

const components = [AlphaComponent, BetaComponent];

@NgModule({
  imports: [
    CommonModule,
   // ComponentDirectoryModule.smartForChild('p1', components)
    ComponentDirectoryModule.forChild(entries)

  ],
  declarations: components,
  // entryComponents: [ENTRIES.map(e => e.component)],
  // exports: [AlphaComponent]
  providers: [
    // reuse entries instead of re-declaring entryComponents
    {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entries, multi: true}
  ]
})
export class P1Module {
}
