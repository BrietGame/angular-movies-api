import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MovieService]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
