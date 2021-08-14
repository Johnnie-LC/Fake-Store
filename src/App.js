import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/Fake-Store/" exact component={ProductListing} />
          <Route
            exact
            path="/Fake-Store/product/:productId"
            component={ProductDetail}
          />
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
