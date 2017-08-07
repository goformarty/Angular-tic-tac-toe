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

  describe('board construction', () => {
    it('creates an empty board', () => {
      expect(component.isBoardEmpty()).toEqual(true);
    });

    it('starts board with no moves', () => {
      const board = new BoardComponent();
      expect(board.movesCount).toEqual(0);
    });

    it('does not add invalid move to an empty board', () => {
      const board = new BoardComponent();
      board.placeMark(0);
      expect(board.isBoardEmpty()).toEqual(true);
    });

    it('adds valid move to an empty board', () => {
      const board = new BoardComponent();
      board.placeMark(1);
      expect(board.isBoardEmpty()).toEqual(false);
    });
    it('checks if board if full', () => {
      const board = new BoardComponent();
      board.movesCount = 9;
      expect(board.isBoardFull()).toEqual(true);
    });
  });

  describe('making a move', () => {
    it('places a mark on the board', () => {
      const board = new BoardComponent();
      board.placeMark(1);
      expect(board.returnMark(1)).toEqual('X');
    });

    it('does not place a mark when not on the board', () => {
      const board = new BoardComponent();
      board.placeMark(0);
      expect(board.returnMark(0)).toBeUndefined();
    });

    it('does not place a mark when position already taken', () => {
      const board = new BoardComponent();
      board.placeMark(3);
      board.placeMark(3);
      expect(board.returnMark(3)).toEqual('X');
    });

  });
  describe('counting moves', () => {
    it('counts valid moves', () => {
      const board = new BoardComponent();
      board.placeMark(1);
      expect(board.movesCount).toEqual(1);
    });

    it('does not count invalid moves', () => {
      const board = new BoardComponent();
      board.placeMark(-1);
      expect(board.movesCount).toEqual(0);
    });
  });

  describe('current player', () => {
    it('empty board starts with player X', () => {
      const board = new BoardComponent();
      expect(board.currentPlayer).toEqual('X');
    });

    it('changes current player to player O after player X moved', () => {
      const board = new BoardComponent;
      board.placeMark(1);
      expect(board.currentPlayer).toEqual('O');
    });
  });

  describe('game draw', () => {
    it('determines empty board is not a draw', () => {
      const board = new BoardComponent();
      expect(board.isDraw()).toEqual(false);
    });

    it('determines full & not winning board is a draw', () => {
      const board = new BoardComponent();
      board.movesCount = 9;
      expect(board.isDraw()).toEqual(false);
    });
  });
  describe('game won', () => {
    it('determines empty board is not a win', () => {
      const board = new BoardComponent();
      expect(board.isWon()).toEqual(false);
    });
    it('determines top row win', () => {
      const board = new BoardComponent();
     board.placeMark(1);
      expect(board.isWon()).toEqual(false);
    });
  });
});
