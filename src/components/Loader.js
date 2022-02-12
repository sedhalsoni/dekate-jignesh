import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="preloader-container">
            <h1>Dekate</h1>
            <div id="progress-line-container">
                <div className="progress-line"></div>
            </div>
            <h1>Jignesh</h1>
        </div>
    </div>
    );
  }
}