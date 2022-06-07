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

  get name(): string { return this.name; }

  get dexterity(): number { return this.dexterity; }
}

export default Race;