import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaicComponent } from './staic.component';

describe('StaicComponent', () => {
  let component: StaicComponent;
  let fixture: ComponentFixture<StaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
