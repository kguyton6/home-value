import React from "react";
import styled from "styled-components";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from "axios";
import Radio from '@material-ui/core/Radio';


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.774);
  padding: 20px;
  h1 {
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 26px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 70%;
    align-items: center;
  }
  form input {
    height: 45px;
    width: 90%;
    margin: 5px;
    text-indent: 10px;
  }
  .street {
    width: 65%;
  }
  button {
    width: 83%;
    height: 45px;
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
  div {
   display: flex;
  }
  @media (max-width: 400px){
    width: 80%;
    height: 300px;

    button {font-size: 13px;}
  }
`;
class Banner extends React.Component {
  state = {
    name: "",
    number: '',
    email: '',
    contact: 'text',
    checked: true
  };
  handleRadioButton = e => {
    this.setState({checked: !this.state.checked, contact: e.target.value })

  }
 
  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitData = () => {
    const { contact, name, email, number } = this.state
    if(!name || !email || !number){
      this.setState({errorMessage: 'Please Fill Out All Fields'})
    }
    console.log(this.state)
    axios.post("/api/send_data", { contact, name, email, number }).then(res => { 
      if(res.status === 200) {
      this.setState({name: '', number: '', email: '', checked: true})
      } else {
        console.log(res.console.error())
      }
    }).catch(err => console.log(err) )
  };
  timer = () => {
    setTimeout(() => {
    this.setState({errorMessage: ''})
    }, 2500);
  }

  render() {
    return (
      <Section>
       <h1>Curious how much your home is worth? </h1>
        <form onSubmit={this.submitData}>
          <input
            placeholder="Full Name"
            className="name"
            type="text"
            name="name"
            onChange={this.handleInputs}
          />{" "}
          <input
            placeholder="Phone Number"
            type="number"
            name="number"
            onChange={this.handleInputs}
          />{" "}
           <input
            placeholder="Email"
            className="email"
            type="text"
            name="email"
            onChange={this.handleInputs}
          />{" "}
        
        </form>{" "}
        {this.state.errorMessage?

         <span style={{color: 'red', padding: '5px'}}> {this.timer()}{this.state.errorMessage}</span>
         :
         <>
         Preferred method of contact
         <div>
          <FormControlLabel
            value='text'
            control={<Radio />}
            label="Text"
            labelPlacement="start"
            checked={this.state.checked}
            onChange={this.handleRadioButton}
          />
           <FormControlLabel
            value='call'
            control={<Radio />}
            label="Call"
            labelPlacement="start"
            checked={!this.state.checked}
            onChange={this.handleRadioButton}
          />
        </div> </>}

        <button onClick={this.submitData} type="submit">
          Get Home Value{" "}
        </button>{" "}
        <a
          href="https://www.lifehopeshomes.com/fine/real/estate/pp/custom"
          target="_blank"
        >
          Privacy Policy{" "}
        </a>{" "}
      </Section>
    );
  }
}

export default Banner;
