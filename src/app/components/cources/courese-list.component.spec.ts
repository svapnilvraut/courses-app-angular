import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureseListComponent } from './courese-list.component';

describe('CoureseListComponent', () => {
  let component: CoureseListComponent;
  let fixture: ComponentFixture<CoureseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoureseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoureseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
