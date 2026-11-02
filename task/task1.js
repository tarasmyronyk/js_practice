import {Book} from './book.js';
import {EBook} from './EBook.js';

let book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954);
let book2 = new Book('Percy Jackson & the Olympians', 'Rick Riordan', 2005);

book1.printInfo();
book2.printInfo();

let book3 = new EBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'fb2');
book3.printInfo();

Book.oldestBook([book1, book2, book3]).printInfo();
EBook.convert(book1, 'pdf').printInfo();