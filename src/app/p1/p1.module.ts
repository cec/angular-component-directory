import {ANALYZE_FOR_ENTRY_COMPONENTS, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlphaComponent} from './alpha/alpha.component';
import {BetaComponent} from './beta/beta.component';
import {ComponentDirectoryModule} from '../component-directory/component-directory.module';
import {ComponentDirectoryEntry} from '../component-directory/component-directory-entry';
import {FormsModule} from '@angular/forms';

const COMPONENTS = [AlphaComponent, BetaComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentDirectoryModule.forChild(new ComponentDirectoryEntry('p1', COMPONENTS))
  ],
  declarations: COMPONENTS,
  entryComponents: COMPONENTS
})
export class P1Module {
}


