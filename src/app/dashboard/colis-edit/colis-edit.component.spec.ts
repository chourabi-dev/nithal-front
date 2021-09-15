import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisEditComponent } from './colis-edit.component';

describe('ColisEditComponent', () => {
  let component: ColisEditComponent;
  let fixture: ComponentFixture<ColisEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColisEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
