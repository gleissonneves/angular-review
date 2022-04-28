import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViaCliComponent } from './component-via-cli.component';

describe('ComponentViaCliComponent', () => {
  let component: ComponentViaCliComponent;
  let fixture: ComponentFixture<ComponentViaCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentViaCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
