import { Injectable } from '@angular/core';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_list: User[] = [new User("klineconnor", "*****", "klineconnor@yahoo.com")]

  current_user: User = this.user_list[0]

  constructor() { }

  addBook(book: Book)
  {
    console.log(book)
    this.current_user.bookList.push(book)
  }

  addHold(book: Book)
  {
    this.current_user.holdList.push(book)
  }

  removeBook(id: number)
  {
    this.current_user.bookList.splice(id, 1)
  }
}
