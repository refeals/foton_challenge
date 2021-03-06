import { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AiOutlineReload } from "react-icons/ai"

import Loading from "../components/Loading"
import { getMoreBooks } from "../actions/books_actions"
import "../css/bookList.scss"

function BookList({ history }) {
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [page, setPage] = useState(1)
  const books = useSelector((state) => state.books, shallowEqual)
  const query = useSelector((state) => state.query, shallowEqual)
  const dispatch = useDispatch()

  const filteredByImageBooks =
    books?.items?.filter(
      (book) => book.volumeInfo?.imageLinks?.smallThumbnail,
    ) ?? []

  const filteredBooks = filteredByImageBooks.filter((book) =>
    book.volumeInfo.title.toUpperCase().includes(books.filter.toUpperCase()),
  )

  const pageSize = 22

  useEffect(() => {
    if (query.length === 0) {
      history.push("/")
    } else {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLoadMore = () => {
    setLoadingMore(true)
    dispatch(
      getMoreBooks(query, pageSize, page * pageSize, () => {
        setLoadingMore(false)
        setPage(page + 1)
      }),
    )
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="book-list-container">
      <div className="book-list">
        {filteredBooks.map((item) => (
          <Link to={`/books/${item.id}`} className="book-item" key={item.id}>
            <img src={item.volumeInfo.imageLinks.thumbnail} alt="" />
          </Link>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleLoadMore} disabled={loadingMore}>
          <AiOutlineReload /> {loadingMore ? "Loading... " : "Load more"}
        </button>
      </div>
    </div>
  )
}

export default BookList
