import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Calander from './Calander';


const initialState = {
  name: "",
  email: "",
  course: "",
  message: "",
  date: "",
  nameError: "",
  emailError: "",
  courseError: "",
  messageError: "",
  dateError: "",
  success: "",
  visible: false
};
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  state = initialState;

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let dateError = "";
    let messageError = "";
    let courseError = "";

    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }
    if (!this.state.email) {
      emailError = "email cannot be blank";
    }
    if (!this.state.date) {
      dateError = "date cannot be blank";
    }
    if (!this.state.course) {
      courseError = "course cannot be blank";
    }
    if (!this.state.message) {
      messageError = "name cannot be blank";
    }

    if (emailError || nameError || dateError || courseError || messageError) {
      this.setState({ emailError, nameError,  dateError, courseError, messageError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
    })
        .then(() => this.setState({success: "message sent", visible: true}))
        .catch(error => alert(error));
      // clear form
      this.setState(initialState);
    }
  };
  toggle(){
    this.setState({
      visible:!this.state.visible
    })
  }

  render() {
    console.log(this.state.success)
    return (
      <div className="container">

      <Form onSubmit={this.handleSubmit} style={{ width: 1000 }}>
      <br />
      <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="text" name="name" id="examplePassword" placeholder="Enter your name" value={this.state.name} onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
      </FormGroup>
      <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
      </FormGroup>
      <FormGroup>
          <Label for="course">Courses Title & Courses Type (Audio or Video)</Label>
          <Input type="text" name="course" id="courses" placeholder="Courses Title & Courses Type (Audio or Video)" value={this.state.course} onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.courseError}
          </div>
      </FormGroup>
      <FormGroup>
          <Label for="course">Date & time</Label>
          <Input type="text" name="date" id="courses" placeholder="Enter your desired date and time" value={this.state.date} onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.dateError}
          </div>
      </FormGroup>
      <FormGroup>
          <Label for="exampleMessage">Message</Label>
          <Input type="textarea" name="message" id="exampleMessage" placeholder="Enter your text" value={this.state.message} onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.messageError}
          </div>
      </FormGroup>
      <Button>Submit</Button>
      <br/>
      <Alert isOpen={this.state.visible} toggle={this.toggle.bind(this)}>{this.state.success}</Alert>
  </Form>
  <strong style={{color:"red"}}>Booked Time Slots</strong><br/>

  <Calander/>

      </div>

    );
  }
}