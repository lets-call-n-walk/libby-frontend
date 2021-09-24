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

  getBook(id: number)
  {
    return this.book_list[id]
  }
  
  addBook(book: Book)
  {
    this.book_list.push(book)
  }

  updateBook(id: number, book: Book)
  {
    this.book_list[id] = book
  }

  constructor() { }
}
