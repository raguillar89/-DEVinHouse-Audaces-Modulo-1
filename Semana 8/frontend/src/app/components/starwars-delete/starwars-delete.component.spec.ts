import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsDeleteComponent } from './starwars-delete.component';

describe('StarwarsDeleteComponent', () => {
  let component: StarwarsDeleteComponent;
  let fixture: ComponentFixture<StarwarsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
