import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//RCC
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav ms-auto">
              <li class="nav-item active">
                <Link className='nav-link' to="/">Notes</Link>
              </li>

              <li class="nav-item">
                <Link className='nav-link' to="/create">Create Note</Link>
              </li>

              <li class="nav-item dropdown">
                <Link className='nav-link' to="/user">Create User</Link>
              </li>

            </div>

          </div>
        </div>
      </nav>
    )
  }
}
