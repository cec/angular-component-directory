// all components for our tasks have to implement this
export interface TaskComponent {
  variables: any;
  // to be overridden
  submit();
}
