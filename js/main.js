//1

let counter = function (n) {
    counter.count = n !== undefined ? n : counter.count;
    return counter.count++;
}

counter.count = 1;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(10));
console.log(counter());
console.log(counter());
console.log(counter(7));
console.log(counter());
console.log(counter());

//2

let counting = (function () {
    let count = 0;
    return {
      value(num) {
        if (num !== undefined) count = num;
        return count;
      },
      decrement() {
        count--;
      },
      increment() {
        count++;
      }
    };
  }());
  
  console.log(counting.value()); 
  counting.increment();
  counting.increment();
  counting.increment();
  console.log(counting.value()); 
  counting.decrement();
  counting.decrement();
  console.log(counting.value()); 
  console.log(counting.value(10)); 
  counting.decrement();
  console.log(counting.value()); 
  console.log(counting.value(15)); 
  counting.increment();
  console.log(counting.value()); 
  
  //3

  let myPrint = (a, b, res) => `${a}^${b}=${res}`;
  let myPow = (a, b, callback) => {
    let pow = (x, n) => {
      if (n !== 1) return x *= pow(x, n - 1);
      return x;
    };
    return callback(a, b, pow(a, b));
  };
  console.log(myPow(2, 6, myPrint));
  console.log(myPow(5, 5, myPrint)); 

//4, 5, 6

function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  }
  let yearNow = new Date().getFullYear();
  let car1 = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    info: fullInfo,
    get used() {
      return this.year !== yearNow ? 'used' : 'new';
    },
    set used(value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };
  let car2 = {
    engine: 5000,
    model: 'FX50 AWD',
    name: 'Infinite',
    year: 2019,
    info: fullInfo,
    get used() {
      return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
      if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
  };
  console.log(car1.info()); 
  car.used = 'new';
  console.log(car1.info()); 
  car.used = 'used';
  console.log(car1.info()); 
  console.log(car2.info()); 
  car.used = 'used';
  console.log(car2.info()); 

  //7

  let list = [12, 23, 100, 34, 56, 9, 233];
  let myMax = (arg) => Math.max.apply(Math, arg);
  console.log(myMax(list));

  //8

  function myMul(a, b) {
    return a * b;
  }
  let myDouble = myMul.bind(null, 2); 
console.log(myDouble(3)); 
console.log(myDouble(4)); 
console.log(myDouble(5)); 
let myTriple = myMul.bind(null, 3);
console.log(myTriple(3)); 
console.log(myTriple(4)); 
console.log(myTriple(5)); 

//9

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];
let notUniqStrings = [ 'Bob',  'Kate',  'Jhon',  'Tom',  'Jhon',  'Kate',  'Tom',  'Bob',  'Jhon',  'Tom' ];
let myUniq = (arr) => {
  let set = new Set();
  arr.forEach((val) => {
    set.add(val);
  });
  return set;
};
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));