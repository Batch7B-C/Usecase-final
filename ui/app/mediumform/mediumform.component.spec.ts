import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumformComponent } from './mediumform.component';

describe('MediumformComponent', () => {
  let component: MediumformComponent;
  let fixture: ComponentFixture<MediumformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
