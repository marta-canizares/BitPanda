import { TestBed } from '@angular/core/testing';

import { ListPandaService } from './list-panda.service';

describe('ListPandaService', () => {
  let service: ListPandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
