import { Redirect } from "react-router-dom"
import { shallowEqual, useSelector } from "react-redux"
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai"
import "../css/bookDetails.scss"

function BookDetails({ match }) {
  const books = useSelector((state) => state.books, shallowEqual)
  const book = books?.items?.find((item) => item.id === match.params.id)
  // const dispatch = useDispatch()

  if (!book) {
    return <Redirect to="/books" />
  }

  const { volumeInfo, saleInfo } = book

  const handleToggleFavorite = () => {
    // dispatch(toggleFavorite(book.id))
  }

  console.log(book)

  return (
    <div className="book-details">
      <div className="header-grid">
        <div className="left">
          <img src={volumeInfo.imageLinks.thumbnail} alt="" />
          <p className="pages">{volumeInfo.pageCount} pages</p>
        </div>
        <div className="right">
          <h2 className="book-title">{volumeInfo.title}</h2>
          <p className="authors">{volumeInfo.authors.join(", ")}</p>
          <div className="price-stars">
            <div className="price">
              R$ {saleInfo.retailPrice ? saleInfo.retailPrice.amount : "N/A"}
            </div>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className="buttons">
            <button className="buy">Buy</button>
            <button className="heart" onClick={handleToggleFavorite}>
              {book.favorited ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
        </div>
      </div>
      <div className="description">{volumeInfo.description}</div>
    </div>
  )
}

export default BookDetails
