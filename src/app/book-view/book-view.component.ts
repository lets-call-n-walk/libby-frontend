import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  currentBook!: Book

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    route.params.subscribe((parameters) =>
      this.currentBook = bookService.getBook(parameters['id'])
    )
   }

  ngOnInit(): void {
  }

}
