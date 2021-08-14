import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to="/Fake-Store/">
      <div className="ui fixed menu">
        <div className="ui container center">
          <Link to="/Fake-Store/">
            <h2>FakeShop</h2>
          </Link>
        </div>
      </div>
    </Link>
  )
}
export default Header
