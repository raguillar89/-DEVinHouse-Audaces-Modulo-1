import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsUpdateComponent } from './starwars-update.component';

describe('StarwarsUpdateComponent', () => {
  let component: StarwarsUpdateComponent;
  let fixture: ComponentFixture<StarwarsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
