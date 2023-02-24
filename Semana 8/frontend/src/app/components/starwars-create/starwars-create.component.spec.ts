import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsCreateComponent } from './starwars-create.component';

describe('StarwarsCreateComponent', () => {
  let component: StarwarsCreateComponent;
  let fixture: ComponentFixture<StarwarsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
