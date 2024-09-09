import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGenComponent } from './next-gen.component';

describe('NextGenComponent', () => {
  let component: NextGenComponent;
  let fixture: ComponentFixture<NextGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
