import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer grey darken-4">
          <div className="container grey darken-3">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="grey-text">Developers</h5>
                <p className="grey-text text-lighten-4">Here are some links to look at more of our work, you can also contact us here for questions.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="grey-text">Github Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/jpoulin587">Jim Poulin</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/salvadordiaz1222">Salvador Diaz</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/LRumgay">Liam Rumgay</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            {/* footer copyright content */}
          </div>
        </footer>
        )
    }
}

export default Footer
