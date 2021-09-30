export class Book {
    title: String
    author: String
    category: String
    checkedOut: Boolean
    daysOut: Number

    constructor(title: String, author: String, category: String, checkedOut: Boolean, daysOut: Number)
    {
        this.title = title
        this.author = author
        this.category = category
        this.checkedOut = checkedOut
        this.daysOut = daysOut
    }
}
