import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-anchor" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Rohan Damani</h1>
        <p>Software Developer and Sailor - Living in Santa Monica</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('sail')
            }}
          >
            Sail
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('tech')
            }}
          >
            Tech
          </button>
        </li>
        <li className="hidden-small">
          <button
            onClick={() => {
              props.onOpenArticle('resume')
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('connect')
            }}
          >
            Connect
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('roventures')
            }}
          >
            Roventures
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
