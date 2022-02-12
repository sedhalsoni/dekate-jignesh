import React from 'react';
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Loader from './components/Loader';
import './index.css'

function App() {
  return (
    <React.Fragment>
      <div className="page">
        <Header />
        <main id="main">
          {/* Back To Home Starts [ONLY MOBILE] */}
          <span className="back-mobile" id="back-mobile"><i className="fa fa-arrow-left"></i></span>
          {/* Back To Home Ends [ONLY MOBILE] */}
          <Home />
          <About />
          <Work />
          <Contact />
          <Blog />
        </main>
      </div>
      <Loader />
    </React.Fragment>
  );
}

export default App;
