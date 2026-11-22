const axios = require('axios');


class BookstoreController {
    static token;
    static positivePassword = "eVhhLYbqr6ANE@L";
    static negativePassword = "123";
    static userName = "tmyronyk";
    static async login(userName, password){
        const response = await axios.post('https://demoqa.com/Account/v1/Login', {
            password: password,
            userName: userName
        },
        {
            validateStatus: () => true
        });
        if (response.data && response.data.token) this.token = response.data.token;
        return response;
    };

    static async addBook(isbn){
        const response = await axios.post('https://demoqa.com/BookStore/v1/Books', {
            userId: "0864fc1e-06ea-41b2-a623-fe16a23bd9f9",
            collectionOfIsbns: [{isbn: isbn}]
        },
        {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            validateStatus: () => true
        });
        return response;
    };

    static async deleteAllBooks(){
        const response = await axios.delete('https://demoqa.com/BookStore/v1/Books', {
            params: {
                UserId: "0864fc1e-06ea-41b2-a623-fe16a23bd9f9"
            },
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        return response;
    }

    static async getUser(){
        const response = await axios.get('https://demoqa.com/Account/v1/User/0864fc1e-06ea-41b2-a623-fe16a23bd9f9', {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            validateStatus: () => true
        });
        return response;
    }
}

module.exports = { BookstoreController };