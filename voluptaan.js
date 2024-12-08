function greet(name, age) {
  console.log(`Hello ${name}, you are ${age} years old!`);
}

const person = {
  name: 'John',
  age: 30,
};

greet.apply(person, ['Alice', 25]);
