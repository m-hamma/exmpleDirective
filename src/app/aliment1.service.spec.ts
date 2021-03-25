import { TestBed } from '@angular/core/testing';

import { Aliment1Service } from './aliment1.service';

describe('Aliment1Service', () => {
  let service: Aliment1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aliment1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
