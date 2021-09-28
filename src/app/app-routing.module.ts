import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BooklistComponent } from './booklist/booklist.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book/:id', component: BookViewComponent},
  {path: 'books', component: BooklistComponent},
  {path: 'addBook', component: AddBookComponent},
  {path: 'editBook/:id', component: EditBookComponent},
  {path: 'user', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
