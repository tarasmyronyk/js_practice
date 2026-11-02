export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo() {
        console.log(`Title:${this.title}, Author:${this.author}, Year:${this.year}`);
    }

    static oldestBook(books) {
        let oldest = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldest.year) {
                oldest = books[i];
            }
        }
        return oldest;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim().length === 0) {
            console.log("Title must be a non-empty string");
        }
        this._title = value.trim();
    }
    set author(value) {
        if (typeof value !== "string" || value.trim().length === 0) {
            console.log("Author must be a non-empty string");
        }
        this._author = value.trim();
    }
    set year(value) {
        if (!Number.isInteger(value) || value < 0 || value > 2026) {
            console.log("Year must be a positive integer less than 2026");
        }
        this._year = value;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
}