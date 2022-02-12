import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    return (
      <section id="blog">
        <div className="container page-title text-center">
          <h2 className="text-center">latest <span>posts</span></h2>
          <span className="title-head-subtitle">tips, insights, and best practices about web design and developpment</span>
        </div>
        <div className="container">
          <div className="row">
              <div className="col-12 col-sm-6">
                  <article>
                      <figure className="blog-figure">
                          <a href="blog-post.html">
                              <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/blog/blog-post-4.jpg'} alt="" />
                          </a>
                          <div className="post-date"> <span>23</span>
                              <span>JUN</span>
                          </div>
                      </figure>
                      <a href="blog-post.html">
                          <h4>create a wordpress theme from scratch</h4>
                      </a>
                      <div className="blog-excerpt">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ...</p>
                          <a href="blog-post.html" className="btn readmore"><span>Read more</span></a>
                      </div>
                  </article>
              </div>
              <div className="col-12 col-sm-6">
                  <article>
                      <figure className="blog-figure">
                          <a href="blog-post.html">
                              <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/blog/blog-post-1.jpg'} alt="" />
                          </a>
                          <div className="post-date"> <span>18</span>
                              <span>aug</span>
                          </div>
                      </figure>
                      <a href="blog-post.html">
                          <h4>Effective Marketing Strategy tips</h4>
                      </a>
                      <div className="blog-excerpt">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ...</p>
                          <a href="blog-post.html" className="btn readmore"><span>Read more</span></a>
                      </div>
                  </article>
              </div>
              <div className="col-12 col-sm-6">
                  <article>
                      <figure className="blog-figure">
                          <a href="blog-post.html">
                              <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/blog/blog-post-3.jpg'} alt="" />
                          </a>
                          <div className="post-date"> <span>01</span>
                              <span>mar</span>
                          </div>
                      </figure>
                      <a href="blog-post.html">
                          <h4>free psd and sketch ressouces</h4>
                      </a>
                      <div className="blog-excerpt">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ...</p>
                          <a href="blog-post.html" className="btn readmore"><span>Read more</span></a>
                      </div>
                  </article>
              </div>
              <div className="col-12 col-sm-6">
                  <article>
                      <figure className="blog-figure">
                          <a href="blog-post.html">
                              <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/blog/blog-post-2.jpg'}alt="" />
                          </a>
                          <div className="post-date"> <span>01</span>
                              <span>mar</span>
                          </div>
                      </figure>
                      <a href="blog-post.html">
                          <h4>How to become a successful freelancer</h4>
                      </a>
                      <div className="blog-excerpt">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris Lorem ...</p>
                          <a href="blog-post.html" className="btn readmore"><span>Read more</span></a>
                      </div>
                  </article>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-lg-12 allposts"> <a href="#" className="btn btn-secondary"><span><i className="fa fa-comments"></i>All posts</span></a>
              </div>
          </div>
      </div>
    </section>
    );
  }
}