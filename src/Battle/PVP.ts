import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight() {
    super.fight();
    if (this._player2.strength > this._player1.strength
      && this._player2.defense > this._player1.defense) {
      return -1;
    }
    return 1;
  }
}

export default PVP;