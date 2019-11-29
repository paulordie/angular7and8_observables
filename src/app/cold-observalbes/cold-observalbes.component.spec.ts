import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObservalbesComponent } from './cold-observalbes.component';

describe('ColdObservalbesComponent', () => {
  let component: ColdObservalbesComponent;
  let fixture: ComponentFixture<ColdObservalbesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdObservalbesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdObservalbesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
