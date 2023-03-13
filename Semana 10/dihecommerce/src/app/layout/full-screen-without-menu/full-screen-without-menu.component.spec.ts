import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenWithoutMenuComponent } from './full-screen-without-menu.component';

describe('FullScreenSemMenuComponent', () => {
  let component: FullScreenWithoutomponent;
  let fixture: ComponentFixture<FullScreenWithoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenWithoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenWithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
