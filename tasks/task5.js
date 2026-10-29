const users = [
    {name: "Taras", email: "taras@example.com", age: 20},
    {name: "John", email: "john@example.com", age: 25},
    {name: "Jane", email: "jane@example.com", age: 30}
];

for (const user of users) {
    console.log(user);
    const {name, email, age} = user;
    console.log(name, email, age);
};