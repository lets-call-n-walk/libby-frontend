export class Book {
    title: String
    author: String
    category: String
    numOfHolds: number

    constructor(title: String, author: String, category: String, numOfHolds: number)
    {
        this.title = title
        this.author = author
        this.category = category
        this.numOfHolds = numOfHolds
    }
}
