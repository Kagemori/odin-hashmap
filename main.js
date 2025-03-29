import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// test.set('apple', 'blue');
// test.get('apple');
// test.has('apple');
// test.remove('apple');

// test.length();

// test.remove('jacket');

// console.log(test.map);
// test.length();

// test.clear();
test.set('moon','silver');

console.log(test.map);
test.length();
test.keys();
test.values();
test.entries();