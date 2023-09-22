class MArray {
  constructor(_arr) {
    this.array = _arr;
  }

  removeValue(v) {
    let len = this.array.length;

    for (let i = len; i > -1; i--) {
      if (this.array[i] === v) {
        this.array[i] = null;
        this.array.splice(i, 1);
      }
    }
  }

  equalValue(v) {
    let len = this.array.length;

    for (let i = len; i > -1; i--) {
      if (this.array[i] === v) {
        return true;
      }
    }
    return false;
  }
  shuffle() {
    let len = this.array.length;
    let i = len;
    while (i--) {
      let p = +(Math.random() * len);
      let t = this.array[i];
      this.array[i] = this.array[p];
      this.array[p] = t;
    }
  }

  shuffleES6() {
    this.array.reverse().forEach((item, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      [this.array[index], this.array[j]] = [this.array[j], this.array[index]];
      item;
    });
  }
  shuffleWithCrypto() {
    const shuffled = this.array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(
        (crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32) * (i + 1),
      );
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.array = shuffled;
  }

  getFirst() {
    return this.array.length > 0 ? this.array[0] : undefined;
  }

  getLast() {
    return this.array.length > 0 ? this[this.array.length - 1] : undefined;
  }
  sort() {
    this.array.sort(function (a, b) {
      return a - b;
    });
  }
}

export function pick_lucky_numbers(maximum_number) {
  const numbers = Array.from(
    { length: maximum_number },
    (_, index) => index + 1,
  );
  const marr = new MArray(numbers);
  const crypto_marr = new MArray(numbers);
  marr.shuffleES6();
  crypto_marr.shuffleWithCrypto();
  marr.array = marr.array.slice(0, maximum_number === 49 ? 6 : 7);
  crypto_marr.array = crypto_marr.array.slice(0, maximum_number === 49 ? 6 : 7);
  marr.sort();
  crypto_marr.sort();

  console.log("crypto shuffle", crypto_marr.array);

  return crypto_marr.array;
}
