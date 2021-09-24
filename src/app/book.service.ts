import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book_list: Book[] = [{title: "Harry Potter", author: "JK Rowling", category: "Fantasy", numOfHolds: 1}]

  getBooks()
  {
    return this.book_list
  }

  constructor() { }
}
