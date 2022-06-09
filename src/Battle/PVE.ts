import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monsters: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, monsters: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight() {
    super.fight();
    if (this._monsters.length > 100) { return -1; }
    return 1;
  }
}

export default PVE;