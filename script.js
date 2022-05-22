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

moveToXY({ x: -1, y: -1 }, { x: -10, y: -10 }, 3, 10);

//same to moveToXY
function moveToXY2(from, to, speed, gaps) {
  if (speed === 0) return console.log("smth went wrong");

  const sumSqrt = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2);
  const S = +Math.sqrt(sumSqrt).toFixed(2); // distance
  const T = +(S / speed).toFixed(2); // time
  const cosAngul = (to.x - from.x) / S; // cosinus
  const sinAngul = (to.y - from.y) / S; // sinus
  const gapsCoordinates = [];

  for (let i = 1; i <= gaps; i++) {
    const tGap = +(T * (i / gaps)).toFixed(2); // time in interval
    const distanseGap = speed * tGap;
    const xGap = +(distanseGap * cosAngul + from.x).toFixed(2);
    const yGap = +(distanseGap * sinAngul + from.y).toFixed(2);
    gapsCoordinates.push(new Coordinates(tGap, xGap, yGap));
  }
  return console.log(gapsCoordinates);
}

moveToXY2({ x: -1, y: -1 }, { x: -10, y: -10 }, 3, 10);

// conversion to radians
function degToRad(deg) {
  return deg * (Math.PI / 180.0);
}

// method with acceleration
function moveToAcceleration(from, speed, gaps, acc, angul, time) {
  if (speed === 0) return console.log("smth went wrong");

  const gapsCoordinates = [];

  for (let i = 1; i <= gaps; i++) {
    const tGap = +(time * (i / gaps)).toFixed(2); // time in interval
    const distanseGap = speed * tGap + (acc * Math.pow(tGap, 2)) / 2; // acceleration formula
    const xGap = +(distanseGap * Math.cos(degToRad(angul)) + from.x).toFixed(2); // coordinate by OX
    const yGap = +(distanseGap * Math.sin(degToRad(angul)) + from.y).toFixed(2); // coordinate by OY
    gapsCoordinates.push(new Coordinates(tGap, xGap, yGap));
  }

  return console.log(gapsCoordinates);
}
moveToAcceleration({ x: 1, y: 1 }, 1, 10, 1, 45, 10);

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
