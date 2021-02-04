import { Link } from "react-router-dom"
import "../css/home.scss"

function Home() {
  return <div className="home">
    <Link to="/books">Web Development Book List</Link>
  </div>
}

export default Home
