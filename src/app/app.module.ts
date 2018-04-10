import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {P1Module} from './p1/p1.module';
import {P2Module} from './p2/p2.module';
import {ComponentDirectoryModule} from './component-directory/component-directory.module';
import {TopComponent} from './top/top.component';
import { TaskDirective } from './task.directive';
import { BottomComponent } from './bottom/bottom.component';
import {AbstractTaskComponent} from './abstract-task/abstract-task.component';
import {ComponentDirectoryEntry} from './component-directory/component-directory-entry';
import {FormsModule} from '@angular/forms';

// const ENTRIES = [];



@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TaskDirective,
    BottomComponent,
    AbstractTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    P1Module,
    P2Module,
    ComponentDirectoryModule.forRoot(new ComponentDirectoryEntry('AppModule', []))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
