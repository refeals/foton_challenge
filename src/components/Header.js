import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { setFilter } from "../actions/books_actions"
import "../css/header.scss"

function Header() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { filter } = useSelector((state) => state.books, shallowEqual)
  const [showInput, setShowInput] = useState(false)

  const handleBack = () => {
    history.goBack()
  }

  const handleShowInput = () => {
    setShowInput(!showInput)
  }

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <header>
      <section>
        <AiOutlineArrowLeft onClick={handleBack} />
        <h1>Foton Web Challenge - Books</h1>
        <AiOutlineSearch onClick={handleShowInput} />
      </section>
      <div className="bottom-line"></div>
      <input
        type="text"
        className={`filter-input ${showInput ? "show" : ""}`}
        value={filter ?? ""}
        onChange={handleChange}
      />
    </header>
  )
}

export default Header
