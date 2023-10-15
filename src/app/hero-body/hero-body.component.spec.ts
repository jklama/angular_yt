import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBodyComponent } from './hero-body.component';

describe('HeroBodyComponent', () => {
  let component: HeroBodyComponent;
  let fixture: ComponentFixture<HeroBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBodyComponent]
    });
    fixture = TestBed.createComponent(HeroBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
