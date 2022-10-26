import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import {MovieService} from "../movie.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [MovieService]
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
