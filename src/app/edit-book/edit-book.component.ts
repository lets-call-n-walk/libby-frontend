import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  currentBook!: Book

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((parameters) =>
      this.currentBook = bookService.getBook(parameters['id']))
      
   }

  ngOnInit(): void {
  }

  UpdateBook()
  {
    this.route.params.subscribe((parameters) =>
      this.bookService.updateBook(parameters['id'], this.currentBook)
    )

    this.router.navigate(['/books'])
  }

}
