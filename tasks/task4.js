const person = {
    firstName: "Taras",
    lastName: "Myronyk",
    age: 20,
};

person.email = "email@example.com";
delete person.age;
console.log(person);