import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyformComponent } from './easyform.component';

describe('EasyformComponent', () => {
  let component: EasyformComponent;
  let fixture: ComponentFixture<EasyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
