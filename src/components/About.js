import React, { Component } from 'react';

export default class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: 'Dekate',
      lastName: 'Jignesh',
      birthDate: '14 April 1993',
      myExperience: '5 yrs 2 mo',
      address: 'Ahmedabad',
      languages: 'English, Hindi, Gujarati, Marathi',
      phoneNumber: '+91 9328354554',
      email: 'd1993jignesh@gmail.com',
      skype: '-',
      linkdln: 'jignesh-dekate',
      aboutMe: 'My name is Dekate Jignesh. I have over 5+ years of experience in UK and Ireland base Account, Data Entry, Data Analysis, Bookkeeping, Prepare VAT, Prepare Account/ management accounts (Quarterly, Monthly, Yearly and half Yearly), MS office, Sage50, Sageone, Irish, VT, Kashflow, Xero, qb online and many other Software working.',
      experience: [{
        year: 'Feb-2020 - Present',
        designation: 'Account Executive',
        companyName: 'Confiance Bizsol Pvt Ltd.',
        description: 'Ahmedabad, India, Gujarat'
      },
      {
        year: 'Feb 2019 - Feb 2020',
        designation: 'Account Executive',
        companyName: 'XL KPO Services',
        description: '404 Noble Trade Centre, Bhuyangdev Cross Rd, opp. BD Rao Hall, Ahmedabad, Gujarat 380052,'
      },
      {
        year: 'Sep 2017 - Feb 2019',
        designation: 'Accountant',
        companyName: 'Affinity Associates Limited',
        description: '401, Harsh Avenue, Nr. Sattar Taluka Society, Navjeevan Press Road, Ahmedabad, Gujarat 380014'
      },
      {
        year: 'Sep 2017 - Feb 2019',
        designation: 'Account Assistant',
        companyName: 'SAII AG LLP',
        description: 'Ahmedabad, India, Gujarat'
      }],
      education: [{
        year: '2011 - 2014',
        course: 'Bachelor of Business Administration (BBA), Marketing and Finance',
        university: 'Divaba Institute of Business Administration',
        description: 'Anasan, NH 59, Enasan, Gujarat 382330'
      }],
      skills: [{
        programingLanguage: 'Accounting',
        skillPercentage: '100%',
        skillCal: `calc(0% - 21px)`,
        dataPercent: 100,
      },
      {
        programingLanguage: 'Bookkeeping',
        skillPercentage: '90%',
        skillCal: `calc(10% - 21px)`,
        dataPercent: 90,
      },
      {
        programingLanguage: 'Value-Added Tax (VAT)',
        skillPercentage: '85%',
        skillCal: `calc(15% - 21px)`,
        dataPercent: 85,
      },
      {
        programingLanguage: 'management accounts',
        skillPercentage: '85%',
        skillCal: `calc(15% - 21px)`,
        dataPercent: 85,
      },
      {
        programingLanguage: 'Data Entry',
        skillPercentage: '90%',
        skillCal: `calc(10% - 21px)`,
        dataPercent: 90,
      },
      {
        programingLanguage: 'Data Analysis',
        skillPercentage: '85%',
        skillCal: `calc(15% - 21px)`,
        dataPercent: 85,
      },
      {
        programingLanguage: 'Microsoft Office',
        skillPercentage: '95%',
        skillCal: `calc(5% - 21px)`,
        dataPercent: 95,
      },
      {
        programingLanguage: 'Sage 50',
        skillPercentage: '75%',
        skillCal: `calc(25% - 21px)`,
        dataPercent: 75,
      },
      {
        programingLanguage: 'Sage Accounts',
        skillPercentage: '80%',
        skillCal: `calc(20% - 21px)`,
        dataPercent: 80,
      },
      {
        programingLanguage: 'Sage 100 ERP',
        skillPercentage: '80%',
        skillCal: `calc(20% - 21px)`,
        dataPercent: 80,
      },
      {
        programingLanguage: 'Xero',
        skillPercentage: '85%',
        skillCal: `calc(15% - 21px)`,
        dataPercent: 85,
      },
      {
        programingLanguage: 'Accounting Software',
        skillPercentage: '80%',
        skillCal: `calc(20% - 21px)`,
        dataPercent: 80,
      }]
    }
  }
  render() {
    return (
      <section id="about">
        <div className="container page-title text-center">
          <h2 className="text-center">about <span>me</span></h2>
          <span className="title-head-subtitle">I developing and code beautiful things, and I love what I do.</span>
        </div>
        <div className="container infos">
          <div className="row personal-info">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="image-container">
                <img className="img-fluid d-block" src={process.env.PUBLIC_URL + 'assets/img/dekate-jignesh.jpg'} alt="" />
              </div>
                <p className="d-block d-md-none">{this.state.aboutMe}</p>
            </div>
            <div className="row col-xl-6 col-lg-6 col-md-12">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <ul className="list-1">
                  <li>
                    <h6><span className="font-weight-600">First Name</span>{this.state.firstName}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Last Name</span>{this.state.lastName}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Birthdate</span>{this.state.birthDate}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Experience</span>{this.state.myExperience}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Address</span>{this.state.address}</h6>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <ul className="list-2">
                  <li>
                    <h6><span className="font-weight-600">Langages</span>{this.state.languages}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Phone</span>{this.state.phoneNumber}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Email</span>{this.state.email}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Skype</span>{this.state.skype}</h6>
                  </li>
                  <li>
                    <h6><span className="font-weight-600">Linkdln</span>{this.state.linkdln}</h6>
                  </li>
                </ul>
              </div>
              <div className="col-12 resume-btn-container">
                <a href={process.env.PUBLIC_URL + 'assets/DJ-resume.docx'} className="btn btn-resume" download><span><i className="fa fa-download"></i>download my cv</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-12 mx-auto text-center">
          <hr className="about-section" />
        </div>
        <div className="resume-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h2 className="font-weight-600 uppercase title-section">experience</h2>
                <div className="resume-items">
                  {Array.isArray(this.state.experience) && this.state.experience.length > 0 && this.state.experience.map((experience_data, index) => {
                    return (
                      <div className="item" key={`item-${index}`}>
                        <span className="bullet"></span>
                        <div className="card">
                          <div className="card-header">
                            <span className="year"><i className="fa fa-calendar"></i><i className="fa fa-caret-right"></i>{experience_data.year}</span>
                            <span className="d-block font-weight-400 uppercase">
                            {experience_data.designation}
                            <span className="separator"></span>
                              <span className="font-weight-700">{experience_data.companyName}</span>
                            </span>
                          </div>
                          <div className="card-body">
                            <p>{experience_data.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
                <h2 className="font-weight-600 uppercase title-section">Education</h2>
                <div className="resume-items">
                  {Array.isArray(this.state.education) && this.state.education.length > 0 && this.state.education.map((education_data, index) => {
                    return (
                      <div className="item" key={`item-${index}`}>
                        <span className="bullet"></span>
                        <div className="card">
                          <div className="card-header">
                            <span className="year"><i className="fa fa-calendar"></i><i className="fa fa-caret-right"></i>{education_data.year}</span>
                            <span className="d-block font-weight-400 uppercase">
                            {education_data.course}
                            <span className="separator"></span>
                              <span className="font-weight-700">{education_data.university}</span>
                            </span>
                          </div>
                          <div className="card-body">
                            <p>{education_data.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">skills</h2>
            </div>
            {Array.isArray(this.state.skills) && this.state.skills.length > 0 && this.state.skills.map((skill_data, index) => {
              return (
                <div className="col-12 col-sm-6 col-md-4" key={`skill-list-${index}`}>
                  <span className="skill-text">{skill_data.programingLanguage}</span>
                  <div className="chart-bar">
                    <span className="item-progress" data-percent={skill_data.dataPercent} style={{width: `${skill_data.dataPercent}%`}}></span>
                    <span className="percent" style={{right: skill_data.skillCal}}>{skill_data.skillPercentage}<div className="arrow"></div></span>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}