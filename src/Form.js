import React from "react";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import Swal from 'sweetalert2'




const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 480px;
  background-color: rgba(255, 255, 255, 0.774);
  padding: 40px 20px 20px 20px;
  box-sizing: border-box;
  h1 {
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 26px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 93%;
    height: 70%;
    align-items: center;
  }
  form input {
    height: 45px;
    margin: 5px;
    text-indent: 10px;
  }
  .name,
  .address {
    width: 200px;
  }
  .email {
    width: 260px;
  }
  button {
    width: 83%;
    height: 50px;
    margin: 5px;
    background-color: #60818a;
    color: white;
    font-size: 22px;
    letter-spacing: 1.5px;
  }
  a {
    font-size: 12px;
    color: black;
  }
  div,
  span {
    display: flex;
  }
  span {
    width: 100%;
  }
  div {
    width: 70%;
    justify-content: space-evenly;
  }

  @media (max-width: 400px) {
    width: 90%;
    /* height: 400px; */

    button {
      font-size: 13px;
    }
  }
`;
class Form extends React.Component {
  state = {
    name: "",
    number: "",
    email: "",
    address: "",
    zipcode: '',
    contact: "text",
    checked: true,
    isCaptchaValid: false,
    isError: false,
    messageSent: false
  };
  handleRadioButton = e => {
    this.setState({ checked: !this.state.checked, contact: e.target.value });
  };

  handleInputs = event => {
    if (event.target.value.length > 0 && event.target.name !== 'inputEmail') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  };

  submitData = () => {
    console.log(this.state)
    const { contact, name, email, number, address, zipcode } = this.state;
  let message = {contact, name, email, number, address, zipcode }
   axios.post('/api/send', { message } )
    .then((res) => {
      this.clearForm()
      Swal.fire({
        title: '<strong>Thank You!</strong>',
        type: 'success',
        html: '<p>Heather Smith will contact you shortly!</p>',
        focusConfirm: true
      })
     
    }).catch(error=>this.setState({ error:error.message}));

  };

  clearForm = () => {
    this.setState({  
      address: "", zipcode: '', name: "", number: "", email: "", checked: true });
  }

  timer = () => {
    setTimeout(() => {
      this.setState({ errorMessage: "" });
    }, 2500);
  };

  onCaptchaVerify = (response) => {
    console.log('captcha')
    this.setState({
      isCaptchaValid: true
    })
  }


  render() {
    return (
      <Section>
        <h1>Curious how much your home is worth? </h1>
        <form action='#' onSubmit={this.submitData} >
          <span>
            <input
              value={this.state.name}
              placeholder="Full Name"
              className="name"
              type="text"
              name="name"
              onChange={this.handleInputs}
            />{" "}
            <input
              value={this.state.number}
              placeholder="Phone Number"
              type="number"
              name="number"
              onChange={this.handleInputs}
            />{" "}
          </span>
          <span>
            <input
              value={this.state.address}
              placeholder="Address"
              className="address"
              type="text"
              name="address"
              onChange={this.handleInputs}
            />{" "}
            <input
              value={this.state.zipcode}
              placeholder="Zipcode"
              className="zipcode"
              type="number"
              name="zipcode"
              onChange={this.handleInputs}
            />{" "}
          </span>
          <span
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <input
              value={this.state.email}
              placeholder="Email"
              className="email"
              type="text"
              name="email"
              onChange={this.handleInputs}
            />{" "}
          </span>
        </form>{" "}
        {this.state.errorMessage ? (
          <span style={{ color: "red", padding: "5px" }}>
            {" "}
            {this.timer()}
            {this.state.errorMessage}
          </span>
        ) : (
          <>
            Preferred method of contact
            <div>
              <FormControlLabel
                value="text"
                control={<Radio />}
                label="Text"
                labelPlacement="start"
                checked={this.state.checked}
                onChange={this.handleRadioButton}
                style={{ width: "40px" }}
              />
              <FormControlLabel
                value="call"
                control={<Radio />}
                label="Call"
                labelPlacement="start"
                checked={!this.state.checked}
                onChange={this.handleRadioButton}
                style={{ width: "40px" }}
              />
            </div>{" "}
          </>
        )}
        <button onClick={this.submitData} type="submit">
          Get Home Value{" "}
        </button>{" "}
        <a
          href="https://app.termly.io/document/privacy-policy/b4af483e-d407-4e3e-8a85-1ecc264672c2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy{" "}
        </a>{" "}
      </Section>
    );
  }
}

export default Form;
