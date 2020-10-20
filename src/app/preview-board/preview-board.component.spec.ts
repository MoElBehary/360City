import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewBoardComponent } from './preview-board.component';

describe('PreviewBoardComponent', () => {
  let component: PreviewBoardComponent;
  let fixture: ComponentFixture<PreviewBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
