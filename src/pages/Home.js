import { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { getBooks } from "../actions/books_actions"

function Home() {
  const books = useSelector((state) => state.books, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks("harry potter"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(books)

  return <div>Home</div>
}

export default Home
