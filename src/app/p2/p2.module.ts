import {ANALYZE_FOR_ENTRY_COMPONENTS, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GammaComponent } from './gamma/gamma.component';
import { ThetaComponent } from './theta/theta.component';
import {ComponentDirectoryModule} from "../component-directory/component-directory.module";

const MODULE_NAME = 'p2';

const ENTRIES = [
  {moduleName: MODULE_NAME, componentName: 'gamma', component: GammaComponent},
  {moduleName: MODULE_NAME, componentName: 'theta', component: ThetaComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ComponentDirectoryModule.forChild(ENTRIES)
  ],
  declarations: [ENTRIES.map(e => e.component)],
  providers: [
    // reuse entries instead of re-declaring entryComponents
    {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: ENTRIES, multi: true}
  ]
})
export class P2Module { }
