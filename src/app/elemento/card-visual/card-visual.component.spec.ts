import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisualComponent } from './card-visual.component';

describe('CardVisualComponent', () => {
  let component: CardVisualComponent;
  let fixture: ComponentFixture<CardVisualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVisualComponent]
    });
    fixture = TestBed.createComponent(CardVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
