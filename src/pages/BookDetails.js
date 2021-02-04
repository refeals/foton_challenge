import { Redirect } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"

function BookDetails({ match }) {
  const books = useSelector((state) => state.books, shallowEqual)
  const book = books?.items?.find((item) => item.id === match.params.id)

  if (!book) {
    return <Redirect to="/books" />
  }

  return (
    <div className="book-details">
      <div className="header-grid">
        <div className="left">
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          <p className="pages">216 pages</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
