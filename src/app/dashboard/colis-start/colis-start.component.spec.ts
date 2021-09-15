import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisStartComponent } from './colis-start.component';

describe('ColisStartComponent', () => {
  let component: ColisStartComponent;
  let fixture: ComponentFixture<ColisStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColisStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
