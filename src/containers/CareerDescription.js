import React, { Component } from 'react'
import { Link } from 'react-static'
//
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
//
import InputValidator from '../reusables/validator'

class CareerDescriptionBanner extends Component {
  render() {
    return (
      <div className="career-desc-banner-wrapper">
        <div className="career-desc-banner-holder">
          <button className="btn btn-sm btn-bow">Back</button>
          <p className="t-header-sm desc-margin">
            Engineering at Narrative &middot; New York, NY
          </p>
          <div className="career-desc-title-wrapper">
            <p className="t-h2">Senior Software Engineering - Front End</p>
            <button className="btn btn-lg btn-wob">Apply</button>
          </div>
        </div>
      </div>
    )
  }
}

class CareerDescriptionTitle extends Component {
  render() {
    return (
      <div className="job-description-wrapper">
        <p className="t-header-md  job-title">
          We're looking for a talented Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <div className="job-description-holder">
          <p className="t-h4 overview-title">Overview</p>
          <p className="t-body-md overview-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="job-description-duties">
          <div className="job-description-duties-holder-left">
            <p className="t-h4">What you'll do</p>
          </div>
          <div className="job-description-duties-holder">
            <ul className="t-body-sm">
              <li>
                Build and scale data infrastructure that powers batch and
                real-time data processing of hundreds of billions of records
                daily.
              </li>
              <li>
                Provide visibility into health of our data platform
                (comprehensive view of data flow, resources usage, data lineage,
                etc).
              </li>
              <li>
                Automate and handle life-cycle of the systems and platforms that
                process our data.
              </li>
              <li>
                Evolve maturity of our monitoring systems and processes to
                improve visibility and failures detection in our infrastructure.
              </li>
              <li>
                Streamline the intake of the raw data into our Data Warehouse.
              </li>
              <li>
                Provide implementations to expose actionable data to internal
                and external partners
              </li>
            </ul>
          </div>
        </div>
        <div className="job-description-duties">
          <div className="job-description-duties-holder-left">
            <p className="t-h4">Your background</p>
          </div>
          <div className="job-description-duties-holder">
            <ul className="t-body-sm">
              <li>
                Bachelor's degree in Computer Science, Engineering or related
                field, or equivalent training, fellowship, or work experience.
              </li>
              <li>
                5+ years of experience working with data technologies that power
                analytics (e.g. Hadoop, Hive, Spark, Presto, Kafka, etc).
              </li>
              <li>
                Deep understanding of data persistence (relational, key/value,
                document, columnar, graph).
              </li>
              <li>
                Skilled at crafting and building robust backend data services
                (distributed systems, concurrency models, microservices).
              </li>
              <li>
                Strong dedication to code quality, automation and operational
                excellence: unit/integration tests, scripts, workflows.
              </li>
              <li>
                Expertise in object-oriented and/or functional programming
                languages (e.g. Go, Java/Scala, Python).
              </li>
              <li>
                Excellent written and verbal communication and social skills;
                able to effectively collaborate with partners.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class CareerDescriptionAbout extends Component {
  render() {
    return (
      <div className="about-narrative-wrapper">
        <p className="t-header-md about-title">About Narrative</p>
        <p className="t-body-md about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="perks-benefits-wrapper">
          <div className="perks-benefits-holder-left">
            <p className="perks-benefits-title t-h4">Perks &amp; benefits</p>
          </div>
          <div className="perks-benefits-holder">
            <ul className="perk-benefits-list t-body-sm">
              <li>Health insurance with 100% premium covered</li>
              <li>Flexible vacation &amp; paid time off</li>
              <li>Equity plan</li>
              <li>401(k) plan with employer match</li>
              <li>Free lunch and snacks</li>
              <li>Dog-friendly workplace</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class CareerDescriptionApply extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      fields: {
        fname: "",
        lname: "",
        email: ""
      },
      errors: {},
      sent: false
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

    handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    let checkIfNotEmptyArr = [
      'fname',
      'lname',
      'email'
    ]

    checkIfNotEmptyArr.forEach((item) => {
      if (!InputValidator.checkIfNotEmpty(fields[item])) {
        formIsValid = false
        errors[item] = "This is a required field"
      }
    })

    let checkIfLettersOnlyArr = [
      'fname',
      'lname'
    ]

    checkIfLettersOnlyArr.forEach((item) => {
      if (!InputValidator.checkIfLettersOnly(fields[item])) {
        formIsValid = false
        if (!errors[item]) errors[item] = "Please input letters only"
      }
    })

    if (!InputValidator.checkIfEmailFormat(fields["email"])) {
      formIsValid = false
      if (!errors["email"]) errors["email"] = "Please enter a valid email address"
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  handleChange(e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ fields })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    
    if (this.handleValidation()) {
      this.setState({ sent: true })
    } else {
      alert("Form has errors")
    }
  }

  render() {
    return (
      <div className="career-apply-job-wrapper">
        <p className="t-header-md apply-title">Apply for this job</p>
        <form className="apply-job-form"
          onSubmit={this.handleFormSubmit} 
          noValidate={true}>
          <div className="name-holder">
            <div className="firstname t-sub1 mr" htmlFor="fname">
              <div className="mb">First Name</div>
              <div className={classNames("input-invi-wrapper", {
                'on-error': this.state.errors.fname
              })}>
                <input className="form-input input input-lg input-apply"
                  type="text" 
                  name="fname"
                  onChange={this.handleChange} />
                <span className="input-error-message">
                  <span className="exclamation">!</span>
                  <span>{this.state.errors.fname}</span>
                </span>
              </div>
            </div>
            <div className="lastname t-sub1" htmlFor="lname">
              <div className="mb">Last Name</div>
              <div className={classNames("input-invi-wrapper", {
                'on-error': this.state.errors.lname
              })}>
                <input className="form-input input input-lg input-apply"
                  type="text" 
                  name="lname"
                  onChange={this.handleChange} />
                <span className="input-error-message">
                  <span className="exclamation">!</span>
                  <span>{this.state.errors.lname}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-email-holder">
            <div className="contact-holder-left mr">
              <div className="email t-sub1" htmlFor="email">
                <div className="mb">Email</div>
                <div className={classNames("input-invi-wrapper", {
                'on-error': this.state.errors.email
              })}>
                <input className="form-input input input-lg input-apply"
                  type="text" 
                  name="email"
                  onChange={this.handleChange} />
                <span className="input-error-message">
                  <span className="exclamation">!</span>
                  <span>{this.state.errors.email}</span>
                </span>
              </div>
              </div>

              <div className="resume-holder">
                <div className="t-sub1 mb">Resume / CV</div>
                <div className="upload-dropbox">
                  <Link to="#" className="resume-upload">
                    Upload,
                  </Link>
                  
                  <Link to="#" className="resume-dropdbox">
                    Dropbox
                  </Link>
                </div>
              </div>
            </div>
            <div className="contact-holder-right">
              <div className="phone t-sub1" htmlFor="phone">
                <div className="mb">Phone</div>
                <input className="input input-lg input-apply" id="phone" name="phone" />
              </div>
              <div className="resume-holder">
                <div className="t-sub1 mb">Cover Letter</div>
                <div className="upload-dropbox">
                  <Link to="#" className="cover-upload">
                    Upload,
                  </Link>
                  
                  <Link to="#" className="cover-dropbox">
                    Dropbox
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-holder">
            <div className="t-sub1 mr" htmlFor="linkedin">
              <div className="mb">Linkedin</div>
              <input className="input input-lg input-apply" id="linkedin" name="linkedin" />
            </div>
            <div className="t-sub1" htmlFor="website">
              <div className="mb">Website</div>
              <input className="input input-lg input-apply" id="website" name="website" />
            </div>
          </div>

          <div className="pronouns-wrapper">
            <p className="t-h5 title-margin">Pronouns</p>
            <p className="t-body-sm pronouns-content">
              At Narrative, we deeply value diversity, inclusion and belonging.
              We actively work to ensure that we are addressing everyone
              appropriately and that we’re acknowledging their identity as they
              would like. This is optional, but if you’re comfortable with
              sharing this information, please let us know your pronouns.
            </p>
            <div className="select-holder">
              <select defaultValue="" className="t-sub1 input-lg input pronouns-select input-select">
                <option value="" disabled>
                  Please select
                </option>
                <option value="1">General Inquiries</option>
                <option value="2">Privacy related</option>
                <option value="3">Press related</option>
              </select>
            </div>
          </div>
          <div className="equal-opportunity-wrapper">
            <p className="t-h5 title-margin">
              U.S. Equal Opportunity Employment Information (Completion is
              voluntary)
            </p>
            <p className="t-body-sm">
              Individuals seeking employment at Squarespace are considered
              without regards to race, color, religion, national origin, age,
              sex, marital status, ancestry, physical or mental disability,
              veteran status, gender identity, or sexual orientation. You are
              being given the opportunity to provide the following information
              in order to help us comply with federal and state Equal Employment
              Opportunity/Affirmative Action record keeping, reporting, and
              other legal requirements.
              <br />
              <br />
              Completion of the form is entirely voluntary. Whatever your
              decision, it will not be considered in the hiring process or
              thereafter. Any information that you do provide will be recorded
              and maintained in a confidential file.
            </p>

            <div className="equal-opportunity-select-wrapper">
              <div className="gender-select-wrapper">
                <p className="t-h5 gender-title">Gender</p>
                <div className="select-holder">
                <select defaultValue="" className="t-sub1 input-lg input  gender-select input-select">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="1">General Inquiries</option>
                  <option value="2">Privacy related</option>
                  <option value="3">Press related</option>
                </select>
              </div>
            </div>

            <div className="hispanic-latino-select-wrapper">
              <p className="t-h5 latino-title">Are you hispanic or latino?</p>
              <div className="select-holder">
                <select defaultValue="" className="t-sub1 input-lg input  latino-select input-select">
                  <option value="" disabled>Please select</option>
                  <option value="1">General Inquiries</option>
                  <option value="2">Privacy related</option>
                  <option value="3">Press related</option>
                </select>
              </div>
              <p className="t-h5 title-margin enthnicity-title">
                Race &amp; Ethnicity Definitions
              </p>
              <p className="t-body-sm">
                If you believe you belong to any of the categories of
                protected veterans listed below, please indicate by making the
                appropriate selection. As a government contractor subject to
                Vietnam Era Veterans Readjustment Assistance Act (VEVRAA), we
                request this information in order to measure the effectiveness
                of the outreach and positive recruitment efforts we undertake
                pursuant to VEVRAA. Classification of protected categories is
                as follows: <br /> <br />
                A "disabled veteran" is one of the following: a veteran of the
                U.S. military, ground, naval or air service who is entitled to
                compensation (or who but for the receipt of military retired
                pay would be entitled to compensation) under laws administered
                by the Secretary of Veterans Affairs; or a person who was
                discharged or released from active duty because of a
                service-connected disability.
                <br /> <br />A "recently separated veteran" means any veteran
                during the three-year period beginning on the date of such
                veteran's discharge or release from active duty in the U.S.
                military, ground, naval, or air service. <br /> <br />
                An "active duty wartime or campaign badge veteran" means a
                veteran who served on active duty in the U.S. military,
                ground, naval or air service during a war, or in a campaign or
                expedition for which a campaign badge has been authorized
                under the laws administered by the Department of Defense.{" "}
                <br /> <br />
                An "Armed forces service medal veteran" means a veteran who,
                while serving on active duty in the U.S. military, ground,
                naval or air service, participated in a United States military
                operation for which an Armed Forces service medal was awarded
                pursuant to Executive Order 12985.
              </p>
            </div>
            </div>
          </div>

          <div className="veteran-wrapper">
            <p className="t-h5 veteran-title">Veterans status</p>
            <div className="select-holder">
              <select defaultValue="" className="t-sub1 input-lg input  veteran-select input-select">
                <option value="" disabled>
                  Please select
                </option>
                <option value="1">General Inquiries</option>
                <option value="2">Privacy related</option>
                <option value="3">Press related</option>
              </select>
            </div>
          </div>

          <div className="disablity-wrapper">
            <p className="t-h5 voluntary-title">
              Voluntary Self-Identification of Disability
            </p>
            <p className="t-h5 complete-form-title">
              Why are you being asked to complete this form?
            </p>
            <p className="t-body-sm complete-form-content">
              Because we do business with the government, we must reach out to,
              hire, and provide equal opportunity to qualified people with
              disabilities1. To help us measure how well we are doing, we are
              asking you to tell us if you have a disability or if you ever had
              a disability. Completing this form is voluntary, but we hope that
              you will choose to fill it out. If you are applying for a job, any
              answer you give will be kept private and will not be used against
              you in any way. <br /> <br />
              If you already work for us, your answer will not be used against
              you in any way. Because a person may become disabled at any time,
              we are required to ask all of our employees to update their
              information every five years. You may voluntarily self-identify as
              having a disability on this form without fear of any punishment
              because you did not identify as having a disability earlier.
            </p>

            <div className="disability-holder">
              <p className="t-h5 disability-description-title">
                How do I know if I have a disability?
              </p>
              <p className="t-body-sm disability-description">
                You are considered to have a disability if you have a physical
                or mental impairment or medical condition that substantially
                limits a major life activity, or if you have a history or record
                of such an impairment or medical condition.
              </p>

              <div className="disability-list-wrapper">
                <p className="t-h5 disability-list-title">
                  Disabilities include, but are not limited to:
                </p>
                <ul className="disability-list t-body-sm">
                  <li>Blindness</li>
                  <li>Deafness</li>
                  <li>Cancer</li>
                  <li>Diabetes</li>
                  <li>Epilepsy</li>
                  <li>Autism</li>
                  <li>Cerebral palsy</li>
                  <li>HIV/AIDS</li>
                  <li>Schizophrenia</li>
                  <li>Muscular dystrophy</li>
                  <li>Bipolar disorder</li>
                  <li>Major depression</li>
                  <li>Multiple sclerosis(MS)</li>
                  <li>Missing Limbs or partially missing limbs</li>
                  <li>Post-traumatic stress disorder (PTSD)</li>
                  <li>Obsessive compulsive disorder</li>
                  <li>Impairments requiring the use of a wheelchair</li>
                  <li>
                    Intellectual disability (previously called mental
                    retardation)
                  </li>
                </ul>
              </div>

              <p className="t-h5 disability-status-title">Disability status</p>
              <div className="select-holder">
              <select defaultValue="" className="t-sub1 input-lg input disability-status-select input-select">
                <option disabled>
                  Please select
                </option>
                <option value="1">General Inquiries</option>
                <option value="2">Privacy related</option>
                <option value="3">Press related</option>
              </select>
              </div>
            </div>
          </div>
          <div className="notice-wrapper">
            <p className="notice-title t-sub1">
              Resonable Accommodation Notice
            </p>
            <p className="t-body-sm notice-content">
              Federal law requires employers to provide reasonable accommodation
              to qualified individuals with disabilities. Please tell us if you
              require a reasonable accommodation to apply for a job or to
              perform your job. Examples of reasonable accommodation include
              making a change to the application process or work procedures,
              providing documents in an alternate format, using a sign language
              interpreter, or using specialized equipment.
              <br />
              <br />
              1Section 503 of the Rehabilitation Act of 1973, as amended. For
              more information about this form or the equal employment
              obligations of Federal contractors, visit the U.S. Department of
              Labor's Office of Federal Contract Compliance Programs (OFCCP)
              website at www.dol.gov/ofccp.
              <br />
              <br />
              PUBLIC BURDEN STATEMENT: According to the Paperwork Reduction Act
              of 1995 no persons are required to respond to a collection of
              information unless such collection displays a valid OMB control
              number. This survey should take about 5 minutes to complete.
            </p>
          </div>
          <button className={classNames("btn btn-lg btn-wob btn-send", {
            'btn-success': this.state.sent
          })}>
            <span className='original-message'>Send</span>
            <span className="thumb">{this.state.sent ? <FontAwesomeIcon icon={faThumbsUp} /> : null}</span>            
          </button>
        </form>
      </div>
    )
  }
}
export default class CareerDescription extends Component {
  render() {
    return (
      <div className="career-description">
        <CareerDescriptionBanner />
        <div className="career-width">
          <CareerDescriptionTitle />
          <CareerDescriptionAbout />
          <CareerDescriptionApply />
        </div>
      </div>
    )
  }
}
