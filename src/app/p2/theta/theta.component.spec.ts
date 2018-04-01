import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetaComponent } from './theta.component';

describe('ThetaComponent', () => {
  let component: ThetaComponent;
  let fixture: ComponentFixture<ThetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
