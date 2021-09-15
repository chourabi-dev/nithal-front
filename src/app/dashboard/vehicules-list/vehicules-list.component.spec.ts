import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculesListComponent } from './vehicules-list.component';

describe('VehiculesListComponent', () => {
  let component: VehiculesListComponent;
  let fixture: ComponentFixture<VehiculesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
