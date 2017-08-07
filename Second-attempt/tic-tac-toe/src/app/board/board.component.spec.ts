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

  it('creates an empty board', () => {
    expect(component.isBoardEmpty()).toEqual(true);
  });

  it('should return board is not empty after a move', () => {
    const board = new BoardComponent();
    board.placeMark(1);

    expect(board.isBoardEmpty()).toEqual(false);
  });

  it('starts with no moves yet', () => {
    const board = new BoardComponent();
    expect(board.movesCount).toEqual(0);
  });

  it('places a mark on the board', () => {
    const board = new BoardComponent();

    board.placeMark(1);

    expect(board.position(1)).toEqual('X');
  });

  it('does not place a mark when not on the board', () => {
    const board = new BoardComponent();

    board.placeMark(0);

    expect(board.position(0)).toBeUndefined();
  });

  it('do not places a mark when position already taken', () => {
    const board = new BoardComponent();

    board.placeMark(3);
    board.placeMark(3);

    expect(board.position(3)).toEqual('X');
  });

  it('counts valid moves', () => {
    const board = new BoardComponent();
    board.placeMark(1);
    expect(board.movesCount).toEqual(1);
  });

  it('starts with player X', () => {
    const board = new BoardComponent();
    expect(board.currentPlayer).toEqual('X');
  });

  it('changes current player to player O after player X moved', () => {
    const board = new BoardComponent;
    board.placeMark(1);
    expect(board.currentPlayer).toEqual('O');
  });

});
