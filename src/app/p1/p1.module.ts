import {ANALYZE_FOR_ENTRY_COMPONENTS, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphaComponent} from './alpha/alpha.component';
import {BetaComponent} from './beta/beta.component';
import {ComponentDirectoryModule} from '../component-directory/component-directory.module';

const MODULE_NAME = 'p1';

// const entries = [
//   {moduleName: MODULE_NAME, componentName: 'alpha', component: AlphaComponent},
//   {moduleName: MODULE_NAME, componentName: 'beta', component: BetaComponent}
// ];

const components = [AlphaComponent, BetaComponent];

// const entries = better('p1', components);

const entries = components.map(c => {
  return {moduleName: MODULE_NAME, componentName: c.cn(), component: c};
});

@NgModule({
  imports: [
    CommonModule,
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

export function better(m: string, comps: any[]) {
  const res = comps.map(c => {
    return {moduleName: m, componentName: c.cn(), component: c};
  });
  console.log(res);
  return res;
}
