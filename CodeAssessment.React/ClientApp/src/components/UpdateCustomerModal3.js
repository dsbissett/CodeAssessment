import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
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

function UpdateCustomerModal3(props){
    const [ customerId, setCustomerId ] = useState();
    const [ companyName, setCompanyName ] = useState();
    const [ contactName, setContactName ] = useState();
    const [ contactTitle, setContactTitle ] = useState();
    const [ address, setAddress ] = useState();
    const [ city, setCity ] = useState();
    const [ region, setRegion ] = useState();
    const [ postalCode, setPostalCode ] = useState();
    const [ country, setCountry ] = useState();
    const [ phone, setPhone ] = useState();
    const [ fax, setFax ] = useState();
    const [ modal, setModal ] = useState(false);
    
    const handleChange = (event) => {
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
    }

    const handleSubmit = (e) => {    
        let customer = {
            customerId: customerId,
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle,
            address: address,
            city: city,
            region: region,
            country: country,
            phone: phone,
            fax: fax
        }    

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        };
    
        const response = fetch('customers', requestOptions);
        e.preventDefault();
        debugger;
        props.closeModal();
    }

    return (
<Modal isOpen={props.isOpen}>
        <ModalHeader>Create New Customer</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <FormGroup>
                        <Label for="customerId">Customer ID:</Label>
                        <Input type="text" name="customerId" onChange={e => setCustomerId(e.target.value)}/>
                    </FormGroup>
                </Row>
              <FormGroup>
                <Label for="companyName">Company Name:</Label>
                <Input
                  type="text"
                  name="companyName"
                  onChange={e => setCompanyName(e.target.value)}
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="contactName">Contact Name:</Label>
                    <Input
                      type="text"
                      name="contactName"
                      onChange={e => setContactName(e.target.value)}
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
                      onChange={e => setContactTitle(e.target.value)}
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
                      onChange={e => setAddress(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="city">City:</Label>
                    <Input
                      type="text"
                      name="city"
                      onChange={e => setCity(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="region">Region:</Label>
                    <Input
                      type="text"
                      name="region"
                      onChange={e => setRegion(e.target.value)}
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
                      onChange={e => setPostalCode(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="country">Country:</Label>
                    <Input
                      type="text"
                      name="country"
                      onChange={e => setCountry(e.target.value)}
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
                      onChange={e => setFax(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input
                      name="phone"
                      onChange={e => setPhone(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>       
              <Button color="primary" type="submit">submitty</Button>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={props.closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
        
    ;
}

export default UpdateCustomerModal3;