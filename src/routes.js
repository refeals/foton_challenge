import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import BookList from "./pages/BookList"
import BookDetails from "./pages/BookDetails"
import Header from "./components/Header"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" exact component={BookList} />
            <Route path="/books/:id" exact component={BookDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routes
