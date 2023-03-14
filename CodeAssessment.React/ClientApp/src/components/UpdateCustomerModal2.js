import React, { Component, useState } from "react";

import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  ModalFooter,
  ModalHeader,
  Table,
  Button,
} from "reactstrap";

export class UpdateCustomerModal2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      customer:{
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
            companyNameState: '',
            companyNameLength: ''
        }
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
    const { customer } = this.state;
    customer[name] = value;
    this.setState({customer});
  };

  handleSubmit(event) {
    debugger;
  }

  // TODO:  Add more validation
  validateCompanyName(e) {
    const { validate } = this.state.customer;

    if(e.target.value == ''){
        console.log("Invalid!")
        validate.companyNameState = 'has-danger';
    }else{
        console.log("Valid!");
        validate.companyNameState = 'has-success';
    }

    this.setState({customer: {validate}});
  }
  
  render() {
    const {companyName, contactName, contactTitle, address, city, region, postalCode, country, phone, fax, setPhone, setFax, validate} = this.state.customer;
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>Create New Customer</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="companyName">Company Name:</Label>
                <Input
                  type="text"
                  name="companyName"
                  defaultValue={companyName}
                  valid={validate.companyNameState === "has-success"}
                  invalid={validate.companyNameState === "has-danger"}
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
                    <Input
                      type="text"
                      name="contactName"
                      defaultValue={contactName}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="contactTitle">Contact Title:</Label>
                    <Input
                      type="text"
                      name="contactTitle"
                      defaultValue={contactTitle}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="address">Address:</Label>
                    <Input
                      type="text"
                      name="address"
                      defaultValue={address}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="city">City:</Label>
                    <Input
                      type="text"
                      name="city"
                      defaultValue={city}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="region">Region:</Label>
                    <Input
                      type="text"
                      name="region"
                      defaultValue={region}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="postalCode">Postal Code:</Label>
                    <Input
                      type="number"
                      name="postalCode"
                      defaultValue={postalCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="country">Country:</Label>
                    <Input
                      type="text"
                      name="country"
                      defaultValue={country}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="fax">Fax:</Label>
                    <Input
                      name="fax"
                      defaultValue={this.state.customer.fax}
                      onChange={this.handleFaxChange}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input
                      name="phone"
                      defaultValue={this.state.customer.phone}
                      onChange={this.handlePhoneChange}
                    />
                  </FormGroup>
                </Col>
              </Row>              
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={this.props.closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
