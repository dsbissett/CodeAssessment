import React, { Component } from 'react';
import { Col, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export class AddData extends Component {
  static displayName = AddData.name;

  constructor(props) {
    super(props);
    this.state = { 
        companyName: '',
        contactName: '',
        contactTitle: '',
        address: '',
        city: '',
        region: '',
        postalCode: '',
        country: '',
        fax: '',
        phone: '',
        validate: {
            companyNameState: ''
        }
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { target } = event;
    
    if(target === undefined){
        this.setState({
            "phone": event
        });
    }
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  handlePhoneChange = (value) => {
      this.setState({
          phone: value
      });
  }

  handleFaxChange = (value) => {
      this.setState({
          fax: value
      });
  }

  handleSubmit(event) {
    debugger;
  }

  validateCompanyName(e) {
    const { validate } = this.state;
    if(e.target.value == ''){
        console.log("Invalid!")
        validate.companyNameState = 'has-danger';
    }else{
        console.log("Valid!");
        validate.companyNameState = 'has-success';
    }

    this.setState({validate})
  }

  render() {
    const {companyName, contactName, contactTitle, address, city, region, postalCode, country, phone, fax, setPhone, setFax} = this.state;
    const buttonStyle = {
        "margin-top": "25px"
    }
    return (        
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="companyName">Company Name:</Label>
            <Input type="text" name="companyName" value={companyName} 
                valid={this.state.validate.companyNameState === 'has-success'}
                invalid={this.state.validate.companyNameState === 'has-danger'}
                onChange={(e) => {
                    this.validateCompanyName(e); 
                    this.handleChange(e);
                }}
              />
        </FormGroup>
        <Row>
            <Col>
                <FormGroup>
                    <Label for="contactName">Contact Name:</Label>
                    <Input type="text" name="contactName" value={contactName} onChange={this.handleChange} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="contactTitle">Contact Title:</Label>
                    <Input type="text" name="contactTitle" value={contactTitle} onChange={this.handleChange} />
                </FormGroup>
            </Col>
            
        </Row>        
        <Row>
            <Col>
                <FormGroup>
                    <Label for="address">Address:</Label>
                    <Input type="text" name="address" value={address} onChange={this.handleChange} />
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="city">City:</Label>
                    <Input type="text" name="city" value={city} onChange={this.handleChange} />
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="region">Region:</Label>
                    <Input type="text" name="region" value={region} onChange={this.handleChange} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="postalCode">Postal Code:</Label>
                    <Input type="number" name="postalCode" value={postalCode} onChange={this.handleChange} />
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Label for="country">Country:</Label>
                    <Input type="text" name="country" value={country} onChange={this.handleChange} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <FormGroup>
                    <Label for="fax">Fax:</Label>
                    <PhoneInput name="fax" value={fax} onChange={this.handleFaxChange} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <PhoneInput name="phone" value={phone} onChange={this.handlePhoneChange}/>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Input style={buttonStyle} type="submit"  value="Submit" onClick={this.handleSubmit} />
        </Row>        
      </Form>
    );
  }
}