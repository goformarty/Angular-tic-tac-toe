import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent} from './board.component';


describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create empty board', () => {
    expect(component.isEmpty()).toEqual(true);
  });

  // xit('should return board is not empty', () => {
  //   const board = new BoardComponent();
  //   board.placeMark('X', 1);

  //   expect(board.isEmpty()).toEqual(false);
  // });

  // xit('places a mark on the board', () => {
  //   const board = new BoardComponent();

  //   board.placeMark('X', 1);

  //   expect(board.position(1)).toEqual('X');
  // });
});
