// stack.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StackService } from './stack.service';

describe('StackService', () => {
  let service: StackService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ StackService ]
    });
    service = TestBed.inject(StackService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a PUT request to update stack size', () => {
    const size = 20;
    service.updateStackSize(size).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://localhost:3000/api/stackSize`);
    expect(req.request.method).toBe('PUT');
    req.flush({ success: true });
  });
});
