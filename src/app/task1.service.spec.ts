import { TestBed } from '@angular/core/testing';

import { Task1Service } from './task1.service';

describe('Task1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Task1Service = TestBed.get(Task1Service);
    expect(service).toBeTruthy();
  });
});
