import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearsComponent } from './bears.component';

describe('BearsComponent', () => {
  let component: BearsComponent;
  let fixture: ComponentFixture<BearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
