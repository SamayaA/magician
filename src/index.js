class Specials {
  #attack;

  #stoned;

  set attack(cellNum) {
    if (typeof cellNum === 'number') {
      this.#attack = 100 - (cellNum - 1) * 10;
    }
  }

  get attack() {
    return this.#attack;
  }

  set stoned(cellNum) {
    if (typeof cellNum === 'number' && this.#attack !== undefined) {
      this.#stoned = this.#attack - Math.log2(cellNum) * 5;
    }
  }

  get stoned() {
    return this.#stoned;
  }
}

export class Magician extends Specials {
}

export class Daemon extends Specials {
}
