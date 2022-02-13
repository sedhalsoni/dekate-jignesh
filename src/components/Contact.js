import React, { Component } from "react";
// import firebase from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    // this.ref = firebase.firestore().collection("contacts");
    this.state = {
      values: {
        name: "",
        email: "",
        message: "",
      },
      phone_number: "+91 9328354554",
      whatsup_number: "+919328354554",
      whatsup_default_message: "Hello how can i help you?",
      email_address: "d1993jignesh@gmail.com",
      linkedin: "jignesh-dekate",
      linkdln_profile: "jignesh-dekate-80720690",
      facebook: "people/Dekate-Jignesh/100007591245522",
      isSubmitted: false,
    };
  }

  handleChange = (e) => {
    const { values } = this.state;
    values[e.target.name] = e.target.value;
    this.setState(values);
  };

  onSubmit = (e) => {
    e.preventDefault();
    toast.warning("ContactUs page start very soon!");
    /* this.setState({ isSubmitted: true });
    this.ref
      .add(this.state.values)
      .then((docRef) => {
        let values = this.state.values;
        values.name = "";
        values.email = "";
        values.message = "";
        this.setState({ isSubmitted: false, values: values });
        toast.success("Your message was sent successfully. Thanks");
      })
      .catch((error) => {
        let values = this.state.values;
        values.name = "";
        values.email = "";
        values.message = "";
        this.setState({ isSubmitted: false, values: values });
        toast.error("Error adding document: ", error);
      }); */
  };

  render() {
    return (
      <section id="contact">
        <ToastContainer />
        <div className="contact-container">
          <div className="container page-title text-center">
            <h2 className="text-center">
              get <span>in touch</span>
            </h2>
            <span className="title-head-subtitle">
              I'm here to help you. Fill out the form below and I will reply you
              shortly.
            </span>
          </div>
          <div className="container">
            <div className="row contact">
              <div className="col-12 col-md-4 col-xl-4 leftside">
                <ul className="custom-list">
                  <li>
                    <h6 className="font-weight-600">
                      {" "}
                      <span className="contact-title">Phone</span>
                      <i className="fa fa-whatsapp"></i>
                      <span className="contact-content">
                        {this.state.phone_number}
                      </span>
                    </h6>
                  </li>
                  <li>
                    <h6 className="font-weight-600">
                      {" "}
                      <span className="contact-title">Email</span>
                      <i className="fa fa-envelope-o fs-14"></i>
                      <span className="contact-content">
                        {this.state.email_address}
                      </span>
                    </h6>
                  </li>
                  <li>
                    <h6 className="font-weight-600">
                      <span className="contact-title">Linkedin</span>
                      <i className="fa fa-linkedin"></i>
                      <span className="contact-content">
                        {this.state.linkedin}
                      </span>
                    </h6>
                  </li>
                </ul>
                <div className="social">
                  <h6 className="font-weight-600 uppercase">Social Profiles</h6>
                  <ul className="list-inline social social-intro text-center p-none">
                    <li className="whatsapp">
                      <a
                        title="Whatsapp"
                        href={`https://api.whatsapp.com/send?phone=${this.state.whatsup_number}&text=${this.state.whatsup_default_message}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li className="facebook">
                      <a
                        title="Facebook"
                        href={`https://www.facebook.com/${this.state.facebook}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a
                        title="Linkedin"
                        href={`https://www.linkedin.com/in/${this.state.linkdln_profile}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="youtube">
                     {/*  // eslint-disable-next-line no-console */}
                      <a title="Youtube" href="/#" onClick={(e) => e.preventDefault()}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-8 col-xl-8 rightside">
                <form
                  className="contactform"
                  onSubmit={this.onSubmit}
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="form-group col-xl-6">
                      <i className="fa fa-user prefix"></i>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="YOUR NAME"
                        value={this.state.values.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      {" "}
                      <i className="fa fa-envelope prefix"></i>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="YOUR EMAIL"
                        value={this.state.values.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-xl-12">
                      {" "}
                      <i className="fa fa-comments prefix"></i>
                      <textarea
                        id="comment"
                        name="message"
                        className="form-control"
                        placeholder="YOUR MESSAGE"
                        value={this.state.values.message}
                        onChange={this.handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-form">
                    <button
                      className="btn button-animated"
                      type="submit"
                      name="send"
                      disabled={this.state.isSubmitted}
                    >
                      <span>
                        <i className="fa fa-send"></i> Send Message
                      </span>
                    </button>
                  </div>
                  <div className="form-message">
                    {" "}
                    <span className="output_message text-center font-weight-600 uppercase"></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
