import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it ('should start with no moves', () => {
    const game = new GameComponent();
    expect(game.movesCount()).toEqual(0);
  });

  // xit('should start with player X', () => {
  //   expect(component.currentPlayer()).toEqual('X');
  // });

  // xit('second move is player O', () => {
  //   expect(component.currentPlayer()).toEqual('O');
  // });
});
