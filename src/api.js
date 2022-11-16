class API {
    // baseUrl:string
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getAllBooks () {
        return fetch(this.baseUrl + `/books`).then(rsp => rsp.json())
    }
    getBookById (bookId) {
        return fetch(this.baseUrl + `/books/${bookId}`).then(rsp => rsp.json())

    }
}
export const api =  new API(`http://localhost:4444`)
// api.getBookById(10).then(console.log)
// api.getAllBooks().then(console.log)