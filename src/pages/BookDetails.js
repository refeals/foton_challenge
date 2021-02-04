import { Redirect } from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai"
import { giveBookStars, toggleFavorite } from "../actions/books_actions"
import "../css/bookDetails.scss"

function BookDetails({ match }) {
  const books = useSelector((state) => state.books, shallowEqual)
  const book = books?.items?.find((item) => item.id === match.params.id)
  const dispatch = useDispatch()

  if (!book) {
    return <Redirect to="/books" />
  }

  const { volumeInfo, saleInfo } = book

  const handleBuy = () => {
    window.location.href = volumeInfo.infoLink
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(book.id))
  }

  const handleGiveStar = (value) => {
    dispatch(giveBookStars(book.id, value))
  }

  const renderStars = () => {
    const starCount = book.stars || 0
    let icons = []

    for (let i = 0; i < starCount; i++) {
      icons.push(<AiFillStar key={i} onClick={() => handleGiveStar(i + 1)} />)
    }
    for (let i = starCount; i < 5; i++) {
      icons.push(
        <AiOutlineStar key={i} onClick={() => handleGiveStar(i + 1)} />,
      )
    }

    return icons
  }

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
            <div className="stars">{renderStars()}</div>
          </div>
          <div className="buttons">
            <button className="buy" onClick={handleBuy}>
              Buy
            </button>
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
