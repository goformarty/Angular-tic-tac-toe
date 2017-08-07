import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';


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

  it('should create the empty board', () => {
    expect(component.isBoardEmpty()).toEqual(true);
  });

  it('places a mark on the board', () => {
    const board = new BoardComponent();

    board.placeMark('X', 1);

    expect(board.position(1)).toEqual('X');
  });

  it('board is not empty after a valid move', () => {
    const board = new BoardComponent();
    board.placeMark('X', 1);

    expect(board.isBoardEmpty()).toEqual(false);
  });

  it('do not places a mark when not on the board', () => {
    const board = new BoardComponent();

    board.placeMark('X', 0);

    expect(board.position(0)).toBeUndefined();
  });

  it('do not places a mark when position already taken', () => {
    const board = new BoardComponent();

    board.placeMark('X', 3);
    board.placeMark('O', 3);

    expect(board.position(3)).toEqual('X');
  });
});
