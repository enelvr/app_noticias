import { TestBed } from '@angular/core/testing';

import { ActualidadService } from './actualidad.service';

describe('ActualidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualidadService = TestBed.get(ActualidadService);
    expect(service).toBeTruthy();
  });
});
