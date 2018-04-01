import { TestBed, inject } from '@angular/core/testing';

import { ComponentDirectoryService } from './component-directory.service';

describe('ComponentDirectoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentDirectoryService]
    });
  });

  it('should be created', inject([ComponentDirectoryService], (service: ComponentDirectoryService) => {
    expect(service).toBeTruthy();
  }));
});
