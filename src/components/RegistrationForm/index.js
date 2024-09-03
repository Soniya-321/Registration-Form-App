// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstnameErrorMsg: false,
    showLastnameErrorMsg: false,
    showErrMsg: false,
    isSubmited: false,
  }
  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const isValidNames = firstName === '' && lastName === ''
    this.setState({showErrMsg: isValidNames})
    if (firstName === '' && lastName === '') {
      this.setState({
        isSubmited: false,
        showFirstnameErrorMsg: true,
        showLastnameErrorMsg: true,
      })
    } else if (firstName !== '' && lastName === '') {
      this.setState({
        isSubmited: false,
        showFirstnameErrorMsg: false,
        showLastnameErrorMsg: true,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({
        isSubmited: false,
        showFirstnameErrorMsg: true,
        showLastnameErrorMsg: false,
      })
    } else {
      this.setState({
        isSubmited: true,
        showFirstnameErrorMsg: false,
        showLastnameErrorMsg: false,
      })
    }
  }
  onChangeFirstname = event => {
    this.setState({firstName: event.target.value})
  }
  onChangeLastname = event => {
    this.setState({lastName: event.target.value})
  }
  errorMessage = () => {
    const {firstName} = this.state
    const isValidFirstname = firstName === ''

    this.setState({showFirstnameErrorMsg: isValidFirstname})
  }
  errorMessage1 = () => {
    const {lastName} = this.state
    const isValidLastname = lastName === ''

    this.setState({showLastnameErrorMsg: isValidLastname})
  }

  onClickAnotherResponse = () => {
    this.setState({isSubmited: false})
  }
  renderFirstName = () => {
    const {showFirstnameErrorMsg, showErrMsg} = this.state
    const inputClass =
      showFirstnameErrorMsg === true ? 'input-box-1' : 'input-box'
    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          className={`${inputClass}`}
          id="firstName"
          onChange={this.onChangeFirstname}
          placeholder="First name"
          onBlur={this.errorMessage}
        />
        {showFirstnameErrorMsg && <p className="error-msg">Required</p>}
      </>
    )
  }

  renderLastName = () => {
    const {showLastnameErrorMsg, showErrMsg} = this.state
    const inputClass =
      showLastnameErrorMsg === true ? 'input-box-1' : 'input-box'
    return (
      <>
        <label htmlFor="laststName" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          className={`${inputClass}`}
          id="laststName"
          onChange={this.onChangeLastname}
          placeholder="Last name"
          onBlur={this.errorMessage1}
        />
        {showLastnameErrorMsg && <p className="error-msg">Required</p>}
      </>
    )
  }

  render() {
    const {isSubmited} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {isSubmited === true ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-img"
            />
            <p className="succes-text">Submitted Successfully</p>
            <button
              className="another-response-btn"
              onClick={this.onClickAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderFirstName()}</div>
            <div className="input-container">{this.renderLastName()}</div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
