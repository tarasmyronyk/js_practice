const { BookstoreController } = require('./bookstoreController');

beforeAll(async () => {
    const loginResponse = await BookstoreController.login(BookstoreController.userName, BookstoreController.positivePassword);
    expect(loginResponse.status).toBe(200);
});

beforeEach(async () =>{
    const deleteResponse = await BookstoreController.deleteAllBooks();
    expect(deleteResponse.status).toBe(204);
})

test('Add "You don\'t know JS" book to the bookstore', async () => {
    const addResponse = await BookstoreController.addBook('9781491904244');
    expect(addResponse.data).toMatchObject({
        "books": [{"isbn": '9781491904244'}]
    });
    expect(addResponse.status).toBe(201);
})

test('Add book with invalid ISBN', async ()=> {
    const addResponse = await BookstoreController.addBook('example');
    expect(addResponse.status).toBe(400);
})

test ('Logging in with invalid password', async () => {
    const loginResponse = await BookstoreController.login(BookstoreController.userName, BookstoreController.negativePassword);
    expect(loginResponse.data.token).toBeUndefined();
})

test ('Adding the same book twice', async () => {
    const addResponse1 = await BookstoreController.addBook('9781449337711');
    expect(addResponse1.status).toBe(201);

    const addResponse2 = await BookstoreController.addBook('9781449337711');
    expect(addResponse2.status).toBe(400);
})

test ('Adding a book and looking for it in the user\'s collection', async () => {
    const addResponse = await BookstoreController.addBook('9781449337711');
    expect(addResponse.status).toBe(201);

    const getUserResponse = await BookstoreController.getUser();
    expect(getUserResponse.status).toBe(200);

    const hasBook = getUserResponse.data.books.some((book) => book.isbn === '9781449337711');
    expect(hasBook).toBe(true);
})