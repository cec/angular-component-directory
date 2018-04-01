import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphaComponent} from './alpha/alpha.component';
import {BetaComponent} from './beta/beta.component';
import {ComponentDirectoryModule} from "../component-directory/component-directory.module";

const MODULE_NAME = 'p1';

const ENTRIES = [
  {moduleName: MODULE_NAME, componentName: 'alpha', component: AlphaComponent},
  {moduleName: MODULE_NAME, componentName: 'beta', component: BetaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ComponentDirectoryModule.forChild(ENTRIES)
  ],
  declarations: [ENTRIES.map(e => e.component)],
  entryComponents: [ENTRIES.map(e => e.component)],
  // exports: [AlphaComponent]
})
export class P1Module {
}
