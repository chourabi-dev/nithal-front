import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackColisComponent } from './track-colis.component';

describe('TrackColisComponent', () => {
  let component: TrackColisComponent;
  let fixture: ComponentFixture<TrackColisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackColisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
