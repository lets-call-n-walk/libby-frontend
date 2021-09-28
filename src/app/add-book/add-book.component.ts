import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  newBook: Book = {title: "", author: "", category: "", checkedOut: false}

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  AddBook()
  {
    this.bookService.addBook(this.newBook)
    this.router.navigate(["/books"])
  }

}
