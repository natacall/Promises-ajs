import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

let save = new GameSaving();
export default class GameSavingLoader {
  static load() {
    return read()
      .then((resolve) => json(resolve))
      .then((saving) => {
        save = JSON.parse(saving);
        return save;
      })
      .catch((error) => { throw error; });
  }
}
