import {Book} from './book.js';
export class EBook extends Book{
    constructor(title, author, year, format){
        super(title, author, year);
        this.format = format;
    }
    printInfo(){
        console.log(`Title:${this.title}, Author:${this.author}, Year:${this.year}, Format:${this.format}`);
    }

    static convert(book, newFormat){
        if (!(book instanceof Book)) {
            console.log("The first argument must be an instance of Book");
            return;
        }
        return new EBook(book.title, book.author, book.year, newFormat);
    }
    set format(value){
        if (typeof value !== "string" || value.trim().length === 0) {
            console.log("Format must be a non-empty string");
        }
        this._format = value.trim();
    }
    get format() {
        return this._format;
    }
}