export default class Task {
  #name: string;
  #time: string;
  #selected: boolean;
  #finished: boolean;
  #deleted: boolean;

  constructor(
    name: string,
    time: string,
    selected = false,
    finished = false,
    deleted = false
  ) {
    this.#name = name;
    this.#time = time;
    this.#finished = finished;
    this.#selected = selected;
    this.#deleted = deleted;
  }

  get name() {
    return this.#name;
  }

  get time() {
    return this.#time;
  }

  get selected() {
    return this.#selected;
  }

  get finished() {
    return this.#finished;
  }

  get deleted() {
    return this.#deleted;
  }

  select() {
    const selected = true;
    return new Task(
      this.name,
      this.time,
      selected,
      this.finished,
      this.deleted
    );
  }

  deselect() {
    const selected = false;
    return new Task(
      this.name,
      this.name,
      selected,
      this.finished,
      this.deleted
    );
  }

  finish() {
    const finished = true;
    return new Task(
      this.name,
      this.time,
      this.selected,
      finished,
      this.deleted
    );
  }

  delete() {
    const deleted = true;
    return new Task(
      this.name,
      this.time,
      this.selected,
      this.finished,
      deleted
    );
  }
}
