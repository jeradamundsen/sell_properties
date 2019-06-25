import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header =()=>{
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Posh Real Estate
      </Link>
      <div className="right menu">
        <Link to="/properties/mylist" className="item">
          All Properties
        </Link>
        <Link to="/"><GoogleAuth/>
        </Link>
      </div>

    </div>
  )
}

export default Header
