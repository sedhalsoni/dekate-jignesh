import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="nav-container">
          <div>
            {/* <!-- Mobile Navigation Starts --> */}
            <ul id="nav" className="navigation">
              <li className="active">
                <div>
                  <a id="link-home" href="#home" className="active">
                    <i className="fa fa-home"></i><span>Home</span>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a id="link-about" href="#about">
                    <i className="fa fa-user"></i><span>About me</span>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a id="link-work" href="#work">
                    <i className="fa fa-briefcase"></i><span>my Portfolio</span>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a id="link-contact" href="#contact">
                    <i className="fa fa-envelope-open"></i><span>get in touch</span>
                  </a>
                </div>
              </li>
             {/*  <li>
                <div>
                  <a id="link-blog" href="#blog">
                    <i className="fa fa-comments"></i><span>my Blog</span>
                  </a>
                </div>
              </li> */}
            </ul>
            {/* <!-- Mobile Navigation Ends --> */}
          </div>
        </div>
        {/* <!-- Stretchy Navigation Starts --> */}
        <div className="cd-stretchy-nav">
          <a className="cd-nav-trigger" href="#0">
            <span aria-hidden="true"></span>
          </a>
          <ul className="stretchy-nav">
            <li className="active"><a href="#home"><span>Home</span></a></li>
            <li><a href="#about"><span>About</span></a></li>
            <li><a href="#works"><span>Portfolio</span></a></li>
            <li><a href="#contact"><span>Contact</span></a></li>
            {/* <li><a href="#blog"><span>Blog</span></a></li> */}
          </ul>
          <span aria-hidden="true" className="stretchy-nav-bg"></span>
        </div>
      </header>
    );
  }
}