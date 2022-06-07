abstract class Race {
  private _name: string;
  private _dexterity: number;
  abstract maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number { 
    throw new Error('Not implemented');
  }

  get name() { return this._name; }

  get dexterity() { return this._dexterity; }
}

export default Race;