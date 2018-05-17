class Human {
  public name: string;
  public age: number;
  // private age: number; // Property 'age' is private and only accessible within class 'Human'.
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yelg = new Human("Yelg", 39, "mail");

const person = {
  name: "qvil",
  age: 27,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }`;
};

console.log(sayHi(yelg));

export {};
