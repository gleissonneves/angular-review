import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTechComponent } from './banner-tech.component';

describe('BannerTechComponent', () => {
  let component: BannerTechComponent;
  let fixture: ComponentFixture<BannerTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
