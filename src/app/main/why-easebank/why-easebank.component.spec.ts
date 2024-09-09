import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEasebankComponent } from './why-easebank.component';

describe('WhyEasebankComponent', () => {
  let component: WhyEasebankComponent;
  let fixture: ComponentFixture<WhyEasebankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyEasebankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyEasebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
