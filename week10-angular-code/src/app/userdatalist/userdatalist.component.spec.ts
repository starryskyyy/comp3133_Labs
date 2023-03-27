import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdatalistComponent } from './userdatalist.component';

describe('UserdatalistComponent', () => {
  let component: UserdatalistComponent;
  let fixture: ComponentFixture<UserdatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdatalistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
