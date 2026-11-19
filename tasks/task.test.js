const axios = require('axios');
test("Get a post with id=5", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/5");
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    });
});

test("Get all comments from post with id=3", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/3/comments");
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(
        [{
            "postId": 3,
            "id": 11,
            "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
            "email": "Veronica_Goodwin@timmothy.net",
            "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
        },
        {
            "postId": 3,
            "id": 12,
            "name": "modi ut eos dolores illum nam dolor",
            "email": "Oswald.Vandervort@leanne.org",
            "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
        },
        {
            "postId": 3,
            "id": 13,
            "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
            "email": "Kariane@jadyn.tv",
            "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
        },
        {
            "postId": 3,
            "id": 14,
            "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
            "email": "Nathan@solon.io",
            "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
        },
        {
            "postId": 3,
            "id": 15,
            "name": "debitis magnam hic odit aut ullam nostrum tenetur",
            "email": "Maynard.Hodkiewicz@roberta.com",
            "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
        }]
    );
});

test("Get a photo with id=4", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos/4");
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://picsum.photos/seed/4/600",
        "thumbnailUrl": "https://picsum.photos/seed/4/150"
    });
});

test("Create a new user", async () => {
    const myUser ={
    "name": "Santa Claus",
    "username": "Santa",
    "email": "santa@example.com"
  };
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", myUser);

    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(myUser);
});

test("Create a new todo", async () => {
    const myTodo ={
    "userId": 1,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  };
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", myTodo);

    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(myTodo);
});

