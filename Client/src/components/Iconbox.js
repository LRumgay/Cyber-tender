import React, { Component } from 'react';

class Iconbox extends Component {
    render(){
        return(
            <section class="section section-icons grey darken-4 center">
            <div class="container  grey darken-4">
              <div class="row">
                <div class="col s12 m4">
                  <div class="card-panel">
                    <i class="material-icons large light-green-text">local_bar</i>
                    <h4>Visit The Bar</h4>
                    <p>Visit our online bar, where you can choose what drink you like to be made via our descion tree.</p>
                  </div>
                </div>
                <div class="col s12 m4">
                  <div class="card-panel">
                    <i class="material-icons large light-green-text">assignment</i>
                    <h4>Drink Menu</h4>
                    <p>You can also browse our collection of cocktails, each with ingredients and directions.</p>
                  </div>
                </div>
                <div class="col s12 m4">
                  <div class="card-panel">
                    <i class="material-icons large  light-green-text">help_outline</i>
                    <h4>Questions</h4>
                    <p>If you have any further questions about the Cyber Bar, check out our About Us section. </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
        )
    }
}

export default Iconbox