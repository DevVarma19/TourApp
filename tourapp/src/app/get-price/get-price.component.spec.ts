import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPriceComponent } from './get-price.component';

describe('GetPriceComponent', () => {
  let component: GetPriceComponent;
  let fixture: ComponentFixture<GetPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
