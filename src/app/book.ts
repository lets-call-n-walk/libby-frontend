export class Book {
    title: String
    author: String
    category: String
    checkedOut: Boolean

    constructor(title: String, author: String, category: String, checkedOut: Boolean)
    {
        this.title = title
        this.author = author
        this.category = category
        this.checkedOut = checkedOut
    }
}
