import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _counter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._counter += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number { return this._counter; }
}

export default Warrior;