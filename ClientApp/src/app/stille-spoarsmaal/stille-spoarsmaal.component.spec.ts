import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StilleSpoarsmaalComponent } from './stille-spoarsmaal.component';

describe('StilleSpoarsmaalComponent', () => {
  let component: StilleSpoarsmaalComponent;
  let fixture: ComponentFixture<StilleSpoarsmaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StilleSpoarsmaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StilleSpoarsmaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
