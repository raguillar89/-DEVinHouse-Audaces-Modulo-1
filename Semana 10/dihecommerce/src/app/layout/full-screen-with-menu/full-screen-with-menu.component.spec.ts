import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenWithMenuComponent } from './full-screen-with-menu.component';

describe('FullScreenWithMenuComponent', () => {
  let component: FullScreenWithMenuComponent;
  let fixture: ComponentFixture<FullScreenWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenWithMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
