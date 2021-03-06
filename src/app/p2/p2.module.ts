import {ANALYZE_FOR_ENTRY_COMPONENTS, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GammaComponent } from './gamma/gamma.component';
import { ThetaComponent } from './theta/theta.component';
import {ComponentDirectoryModule} from '../component-directory/component-directory.module';
import {ComponentDirectoryEntry} from '../component-directory/component-directory-entry';

const COMPONENTS = [GammaComponent, ThetaComponent];
const ENTRY = {moduleName: 'p2', components: COMPONENTS};

@NgModule({
  imports: [
    CommonModule,
    ComponentDirectoryModule.forChild(ENTRY)
  ],
  declarations: COMPONENTS,
  entryComponents: COMPONENTS
})
export class P2Module { }
