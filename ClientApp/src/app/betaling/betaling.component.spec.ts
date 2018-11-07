import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetalingComponent } from './betaling.component';

describe('BetalingComponent', () => {
  let component: BetalingComponent;
  let fixture: ComponentFixture<BetalingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetalingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetalingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
