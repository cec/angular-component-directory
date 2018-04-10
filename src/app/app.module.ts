import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {P1Module} from './p1/p1.module';
import {P2Module} from './p2/p2.module';
import {ComponentDirectoryModule} from './component-directory/component-directory.module';
import {TopComponent} from './top/top.component';
import { TaskDirective } from './task.directive';
import {AbstractTaskComponent} from './abstract-task/abstract-task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    TaskDirective,
    AbstractTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    P1Module,
    P2Module,
    ComponentDirectoryModule.forRoot({moduleName: 'app', components: []})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
