import { TestBed } from '@angular/core/testing';

import { NoteCardServiceService } from './note-card-service.service';

describe('NoteCardServiceService', () => {
  let service: NoteCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
