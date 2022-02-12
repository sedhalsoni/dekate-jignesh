import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <section id="home" className="active">
        <div className="main-text-container">
          <div className="main-text" id="selector">
            <h3>Hi there !</h3>
            <h1 className="ah-headline">
              I'm {' '}
						  <span className="ah-words-wrapper">
                <b className="is-visible">{' '} Dekate Jignesh </b>
                <b>{' '} a Account Executive</b>
              </span>
            </h1>
            <p>I have over 5+ years of experience in UK and Ireland base Account, Data Entry, Data Analysis, Bookkeeping, Prepare VAT, Prepare Account/ management accounts (Quarterly, Monthly, Yearly and half Yearly), MS office, Sage50, Sageone, Irish, VT, Kashflow, Xero, qb online and many other Software working.<br/>I am specialize in UK, India and Ireland base Account and also i'm good in other software like QuickBooks, xero, kashflow.</p>
            <div className="call-to-actions-home">
              <div className="text-left">
                <a href="#about" className="btn link-portfolio-one"><span><i className="fa fa-user"></i>more about me</span></a>
                <a href="#work" className="btn btn-secondary link-portfolio-two"><span><i className="fa fa-suitcase"></i>portfolio</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}