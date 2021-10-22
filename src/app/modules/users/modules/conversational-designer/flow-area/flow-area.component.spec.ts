import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowAreaComponent } from './flow-area.component';

describe('FlowAreaComponent', () => {
  let component: FlowAreaComponent;
  let fixture: ComponentFixture<FlowAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
