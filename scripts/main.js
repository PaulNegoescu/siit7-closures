let nume = 'Paul';
console.group('Closures and scope');
function parent() {
  let b = 0;

  function child(c) {
    b = b + c;
    return b;
  }

  return child;
}

const copil1 = parent();
const copil2 = parent();

/* console.log(copil1(5)); // 5
console.log(copil1(5)); // 5

console.log(copil2(1)); // 1

console.log(copil2(-8)); // -7
console.log(copil2(8)); // 1 */

function myArr() {
  const data = {
    length: 0,
  };

  function push(elem) {
    data[data.length] = elem;
    data.length = data.length + 1;
  }

  function pop() {
    data.length -= 1;
    const oldValue = data[data.length];
    delete data[data.length];

    return oldValue;
  }

  function show() {
    console.log(data);
  }

  return {
    push,
    pop,
    show,
  };
}

const arr1 = myArr();
const arr2 = myArr();
arr2.push('Gheorghe');
arr1.push('Paul');
arr1.push('Ionut');
arr1.show();
arr2.show();

console.log(arr1.pop());
arr1.show();

// Immediately Invoked Function Expression
(function () {
  const myArr = {};

  function show() {
    console.log('Hello');
  }
})();

const obj1 = {
  prenume: 'Paul',
};

const obj2 = obj1;

obj2.nume = 'Negoescu';

console.log(obj1);

function modificatorul(o) {
  //   const clona = { ...o };
  o.test = 'Hopaaaa!';
}

modificatorul(obj2);

console.log(obj1);

const o1 = {};
const o2 = o1;
const a1 = 2;
const a2 = 2;

console.log([1] === [1]);

// Async
// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }

console.groupEnd('Closures and Scope');
console.group('Functions');
function functionDeclaration(a) {
  console.log('declaration');
  return 3;
}
console.log(functionDeclaration());

const functionExpression = function (a) {
  console.log('expr');
  return 6;
};
console.log(functionExpression());

const arrowFunction = (a, v) => 9;
console.log(arrowFunction(1, 2));

console.groupEnd('Functions');

console.group('Async');

console.log(1);

setTimeout(() => console.log(2), 5000);
setTimeout(() => console.log(3), 0);

console.log(4);
let a = 0;
for (let i = 0; i < 100000000; i++) {
  a += i;
}

// Alex: 1 4 3 2
// Bogdan: 1 3 2 4
// Dafi: 1 4 2 3
// Sorin: 1 3 4 2

console.groupEnd('Async');
