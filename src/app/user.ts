import { Book } from "./book"

export class User {
    user_name: String
    password: String
    email: String
    bookList: Book[]

    constructor(user_name: String, password: String, email: String)
    {
        this.user_name = user_name
        this.password = password
        this.email = email
        this.bookList = []
    }

}
