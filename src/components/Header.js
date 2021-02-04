import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai"
import { useHistory } from "react-router-dom"
import "../css/header.scss"

function Header() {
  const history = useHistory()

  const handleBack = () => {
    history.goBack()
  }

  return (
    <header>
      <section>
        <AiOutlineArrowLeft onClick={handleBack} />
        <h1>Web Development Books</h1>
        <AiOutlineSearch />
      </section>
      <div className="bottom-line"></div>
    </header>
  )
}

export default Header
