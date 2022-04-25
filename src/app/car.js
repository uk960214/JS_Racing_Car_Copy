import { CAR_NAME_LENGTH_LIMIT, ERROR_MESSAGE } from '../lib/constants.js';
import { checkStringLengthOver, generateId } from '../lib/utils.js';

class Car {
  static carIdSet = new Set();

  constructor(name) {
    this.id = generateId(Car.carIdSet);
    this.init(this.id, name);
  }

  goForward() {
    this.progress += 1;
  }

  init(id, name) {
    if (!checkStringLengthOver(name, CAR_NAME_LENGTH_LIMIT)) {
      throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH_OVER);
    }
    this.name = name;
    this.progress = 0;
    Car.carIdSet.add(id);
  }
}

export default Car;
