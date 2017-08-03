import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBoardComponent } from './test-board.component';

describe('TestBoardComponent', () => {
  let component: TestBoardComponent;
  let fixture: ComponentFixture<TestBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be empty', () => {
    expect(component.isEmpty()).toBe(true);
  });

});
