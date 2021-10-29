import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-action grey darken-3 white-text">
              <h3>Signup</h3>
            </div>

            <div className="card-content">
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">Username</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">password</i>
          <input id="icon_telephone" type="tel" class="validate" />
          <label for="icon_telephone">Password</label>
        </div>
      </div>
    </form>
  </div>
        

              <button
                class="btn waves-effect grey darken-3"
                type="submit"
                name="action"
              >
                Sign In
                <i class="material-icons right">send</i>
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
