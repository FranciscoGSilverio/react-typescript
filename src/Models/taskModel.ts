export default class Task {
  #name: string;
  #time: string;
  #finished: boolean;
  #deleted: boolean;

  constructor(name: string, time: string, finished = false, deleted = false) {
    this.#name = name;
    this.#time = time;
    this.#finished = finished;
    this.#deleted = deleted;
  }

  get name() {
    return this.#name;
  }

  get time() {
    return this.#time;
  }

  get finished() {
    return this.#finished;
  }

  get deleted() {
    return this.#deleted;
  }

  finish() {
    const finished = true;
    return new Task(this.name, this.time, finished, this.deleted);
  }

  delete() {
    const deleted = true;
    return new Task(this.name, this.time, this.finished, deleted);
  }
}
