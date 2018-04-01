import {Component, Type} from "@angular/core";

export class ComponentDirectoryEntry {
  moduleName: string;
  componentName: string;
  component: Type<any>;
}
