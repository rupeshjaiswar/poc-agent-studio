import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationalDesignerComponent } from './conversational-designer.component';

describe('ConversationalDesignerComponent', () => {
  let component: ConversationalDesignerComponent;
  let fixture: ComponentFixture<ConversationalDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationalDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationalDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
