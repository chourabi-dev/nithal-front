import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisAddComponent } from './colis-add.component';

describe('ColisAddComponent', () => {
  let component: ColisAddComponent;
  let fixture: ComponentFixture<ColisAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColisAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
