import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  book_list: Book[]

  constructor(private bookService: BookService) {
    this.book_list = bookService.getBooks()
   }

  ngOnInit(): void {
  }

  checkout(id: number)
  {
    this.book_list[id].checkedOut = !this.book_list[id].checkedOut
    this.bookService.book_list = this.book_list
  }

}
