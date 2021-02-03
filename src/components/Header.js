import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai"
import "../css/header.scss"

function Header() {
  return (
    <header>
      <section>
        <AiOutlineArrowLeft />
        <h1>Web Development Books</h1>
        <AiOutlineSearch />
      </section>
      <div className="bottom-line"></div>
    </header>
  )
}

export default Header
