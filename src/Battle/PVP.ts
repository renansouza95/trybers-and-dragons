import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  private _winner: number;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._winner = super.fight();
    this._player1 = player1;
    this._player2 = player2;
  }

  get winner(): Fighter {
    if (this._winner === 1) { return this._player1; }
    return this._player2;
  }
}

export default PVP;