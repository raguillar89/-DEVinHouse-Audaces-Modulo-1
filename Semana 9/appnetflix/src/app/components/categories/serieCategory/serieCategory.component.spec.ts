import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieCategoryComponent } from './serieCategory.component';

describe('SerieCategoryComponent', () => {
  let component: SerieCategoryComponent;
  let fixture: ComponentFixture<SerieCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
