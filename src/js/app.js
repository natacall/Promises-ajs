import json from './parser.js';
import read from './reader.js';
import GameSaving from './gameSaving.js';

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
