import React from "react";
import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import Radio from "@material-ui/core/Radio";
import Swal from 'sweetalert2'




const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.774);
  padding: 20px;
  box-sizing: border-box;
  h1 {
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 26px;
  }

  
 input {
    height: 45px;
    margin: 5px;
    text-indent: 10px;
    &:focus {outline-color: red;}
  }
  .name,
  .address {
    width: 60%;
  }
  .email {
    width: 80%;
    margin-bottom: 10px;
  }
  .number, .zipcode {
    width: 180px;
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
    width: 90%;
    justify-content: space-evenly;
  }
  @media (max-width: 550px) {
    width: 80%;
    height: 350px;

  }
  @media (max-width: 400px) {
    width: 90%;

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
    isError: false,
    messageSent: false
  };
  handleRadioButton = e => {
    this.setState({ checked: !this.state.checked, contact: e.target.value });
  };

  handleInputs = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
  };

  submitData = () => {
    const { contact, name, email, number, address, zipcode } = this.state;
  let message = {contact, name, email, number, address, zipcode }
   axios.post('/api/send', { message } )
    .then((res) => {
      Swal.fire({
        title: '<strong>Thank You!</strong>',
        type: 'success',
        html: '<p>Heather Smith will contact you shortly!</p>',
        focusConfirm: true
      })
      this.clearForm()
     
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


  render() {
    return (
      <StyledForm action='#' onSubmit={this.submitData}>
          <span>
            <input
             required
              value={this.state.name}
              placeholder="Full Name"
              className="name"
              type="text"
              name="name"
              onChange={this.handleInputs}
            />{" "}
            <input
             required
              value={this.state.number}
              placeholder="Phone Number"
              type="number"
              name="number"
              className="number"
              onChange={this.handleInputs}
            />{" "}
          </span>
          <span>
            <input
             required
              value={this.state.address}
              placeholder="Address"
              className="address"
              type="text"
              name="address"
              onChange={this.handleInputs}
            />{" "}
            <input
             required
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
              required
              value={this.state.email}
              placeholder="Email"
              className="email"
              type="text"
              name="email"
              onChange={this.handleInputs}
            />{" "}
          </span>
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
      </StyledForm>
    );
  }
}

export default Form;
