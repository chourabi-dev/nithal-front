import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminColisRequestsComponent } from './admin-colis-requests.component';

describe('AdminColisRequestsComponent', () => {
  let component: AdminColisRequestsComponent;
  let fixture: ComponentFixture<AdminColisRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminColisRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminColisRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
