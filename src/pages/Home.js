import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBooks, setBooksInitial } from "../actions/books_actions"
import { setQuery } from "../actions/query_actions"
import "../css/home.scss"

function Home({ history }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setQuery(""))
    dispatch(setBooksInitial(""))
  }, [])

  const handleBookQuery = (query) => {
    dispatch(setQuery(query))
    dispatch(getBooks(query))
    history.push("/books")
  }

  return (
    <div className="home">
      <button
        className="web"
        onClick={() => handleBookQuery("web development")}
      >
        Web Development Book List
      </button>
      <button className="react" onClick={() => handleBookQuery("react js")}>
        React JS Book List
      </button>
      <button className="ux" onClick={() => handleBookQuery("ux design")}>
        UX Design Book List
      </button>
    </div>
  )
}

export default Home
