import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService, private bookService: BookService) { }

  ngOnInit(): void {
  }

  getUser()
  {
    return this.userService.current_user
  }

  getBooks()
  {
    return this.userService.current_user.bookList
  }

  getHold()
  {
    return this.userService.current_user.holdList
  }

  CheckIn(id: number)
  {
    console.log("Checked in")
    this.bookService.book_list[id].checkedOut = !this.bookService.book_list[id].checkedOut
    this.userService.removeBook(id)
  }

}
