import React from 'react';
import PropTypes from 'prop-types';

export function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">{props.title}</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">{props.nav1}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.nav2}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.nav3}</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">{props.nav4}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}  

Navbar.propTypes = {
    title: PropTypes.string,
    nav1: PropTypes.string,
    nav2: PropTypes.string,
    nav3: PropTypes.string,
    nav4: PropTypes.string
}

