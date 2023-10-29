const { log } = console;

export class Render {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  getData(URL, cb, options = {}) {
    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => {
        if (!cb) {
          log(data);
          return null;
        }
        let items = cb(data);
        this.#renderInContainer(items);
      });
  }

  #renderInContainer(items) {
    this.container.innerHTML = items;
  }
}