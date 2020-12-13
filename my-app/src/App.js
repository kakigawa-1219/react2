import React, {Component} from 'react'
import Header from './header.js';
import Nav from './nav.js';
import Main1 from './main1.js';
import Main2 from './main2.js';
import Footer from './footer.js';
import {BrowserRouter as Router} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <>
      <div className="container container1">
      <Header />
    </div>
    <div className="container container2">
       <Router>
          <Nav />
        </Router>
    </div>
    <div className="container container3">
      <Main1 />
    </div>
    <div className="container container4">
      <Main2 />
    </div>
    <div className="container container5">
      <Footer />
    </div>
    
    </>
    )
  }
}

export default App