class Specials {
  #attack;

  #attackCell;

  #stoned;

  #stonedCell;

  set attack(cellNum) {
    if (typeof cellNum === 'number') {
      this.#attackCell = cellNum;
    }
  }

  get attack() {
    this.#attack = this.#attackCell ? (100 - (this.#attackCell - 1) * 10) : undefined;
    return this.#attack;
  }

  set stoned(cellNum) {
    if (typeof cellNum === 'number' && this.attack !== undefined) {
      this.#stonedCell = cellNum;
    }
  }

  get stoned() {
    this.#stoned = this.#stonedCell ? this.attack - Math.log2(this.#stonedCell) * 5 : undefined;
    return this.#stoned;
  }
}

export class Magician extends Specials {
}

export class Daemon extends Specials {
}
