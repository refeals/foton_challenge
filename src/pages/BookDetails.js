import { Redirect } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"

function BookDetails({ match }) {
  const books = useSelector((state) => state.books, shallowEqual)
  const book = books.items.find((item) => item.id === match.params.id)

  if (!book) {
    return <Redirect to="/books" />
  }

  console.log(book)

  return <div>BookDetails</div>
}

export default BookDetails
