import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div class="container">
        <div class="col s12 m8 l9 center">
            <h1>
            Welcome to the Cyber Bar.
            <br/> 
            What can we get you?
            </h1>
        </div>
          <div class="row">
            <div class="col s12 center">
              <a href="#contact" class="btn pulse btn-large grey darken-3">
                  <Link to="/Questions" className="light-green-text">
                <i class="material-icons left light-green-text">local_bar</i>Start Here
                </Link>
              </a>
            </div>
          </div>
      </div>
    )
}

export default Welcome

