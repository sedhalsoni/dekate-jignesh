import React, { Component } from "react";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      project_details: [],
			email: 'd1993jignesh@gmail.com',
			phone: 9328354554
    };
  }
  render() {
    return (
      <section id="work">
        <div className="portfolio-container">
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent complted projects. Want to see more? Email
              me.
            </span>
          </div>
          <div className="portfolio-section">
            <div className="container cd-container">
							<div className="alert alert-warning" role="alert">
								<h5><strong className="text-center">Thanks for visit my portfolio!</strong></h5><hr className="my-12"/>
								<span className="portfolio-details-span">For some security reason I don't show my previous completed projects. If you need more about my projects. Please contact me using email <a href={`mailto:${this.state.email}`}>CLICK TO EMAIL</a> or phone <a href={`tel:${this.state.phone}`}>CLICK TO CALL</a>.</span>
							</div>
            </div>
          </div>
          <div className="portfolio-overlay"></div>
        </div>
      </section>
    );
  }
}
