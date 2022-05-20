//////////////////////// Task 1 /////////////////////////////////

function moveToX(fromX, toX, speed, gaps) {
  if (speed === 0) return console.log("smth went wrong");

  const gapsCoordinatesX = []; // result
  const time = (toX - fromX) / speed;

  for (let i = 1; i <= gaps; i++) {
    const t = time * (i / gaps); // time in interval
    gapsCoordinatesX.push(Math.round((t * speed + fromX) * 100) / 100); // coordinate by OX
  }

  return console.log(gapsCoordinatesX);
}

moveToX(2, 10, 3, 5);

class Coordinates {
  constructor(time, x, y) {
    this.time = time;
    this.x = x;
    this.y = y;
  }
}

function moveToXY(from, to, speed, gaps) {
  if (speed === 0) return console.log("smth went wrong");

  const sumSqrt = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2);
  const S = +Math.sqrt(sumSqrt).toFixed(2); // distance
  const T = +(S / speed).toFixed(2); // time
  const speedX = (to.x - from.x) / T; // speed by OX
  const speedY = (to.y - from.y) / T; // speed by OY
  const gapsCoordinates = [];

  for (let i = 1; i <= gaps; i++) {
    const tGap = +(T * (i / gaps)).toFixed(2); // time in interval
    const xGap = +(speedX * tGap + from.x).toFixed(2); // coordinate by OX
    const yGap = +(speedY * tGap + from.y).toFixed(2); // coordinate by OY
    gapsCoordinates.push(new Coordinates(tGap, xGap, yGap));
  }

  return console.log(gapsCoordinates);
}

moveToXY({ x: 1, y: 1 }, { x: 8, y: 10 }, 3, 10);

/////////////////////// Task 2 //////////////////////////////

class Store {
  constructor() {
    this.store = {};
  }

  set(key, value) {
    this.store[key] = value;
  }

  getByKey(key) {
    return this.store[key];
  }

  getByIndex(index) {
    return this.store[Object.keys(this.store)[index]];
  }

  has(key) {
    return this.store.hasOwnProperty(key);
  }

  remove(key) {
    if (this.has(key)) {
      const { [key]: _, ...rest } = this.store;
      this.store = rest;
      return true;
    }
    return false;
  }
}

const store = new Store();
store.set("key", "test");
store.set("key1", "test1");
store.set("key2", "test2");
store.remove("key");
store.set("key", "test");
store.remove("key1");

// result
console.log(store);
console.log(store.getByIndex(0));
console.log(store.has("foo"));
