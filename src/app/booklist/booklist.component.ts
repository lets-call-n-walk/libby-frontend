import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  searchText: any

  book_list: Book[]

  constructor(private bookService: BookService, private userService: UserService) {
    this.book_list = bookService.getBooks()
   }

  ngOnInit(): void {
  }

  checkout(id: number)
  {
    

    this.book_list[id].checkedOut = !this.book_list[id].checkedOut

    this.userService.addBook(this.book_list[id])
  }

  hold(id: number)
  {
    this.userService.addHold(this.book_list[id])
  }

}
