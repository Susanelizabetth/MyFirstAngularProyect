const username: string = 'susana';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Person2 {
  constructor(public name: string, public age: number) {}
}

const person = new Person2('susana', 30);
