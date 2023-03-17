import React, { useState } from "react";
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

  export default function CustomerAddModal(props) {
    const [customer, setCustomer] = useState();

    const setCustomerValue = (e) => {
        customer[e.target.name] = e.target.value;
        setCustomer(customer);
    }

    const handleSubmit = () => {
        console.log(customer);
    }

    return(
        <Modal isOpen={props.isOpen}>
        <ModalHeader>Create New Customer</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <FormGroup>
                        <Label for="customerId">Customer ID:</Label>
                        <Input type="text" name="customerId" onChange={setCustomerValue} required/>
                    </FormGroup>
                </Row>
              <FormGroup>
                <Label for="companyName">Company Name:</Label>
                <Input
                  type="text"
                  name="companyName"
                  onChange={setCustomerValue}
                  required
                />
              </FormGroup>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="contactName">Contact Name:</Label>
                    <Input
                      type="text"
                      name="contactName"
                      onChange={setCustomerValue}
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
                      onChange={setCustomerValue}
                      required
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
                      onChange={setCustomerValue}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="city">City:</Label>
                    <Input
                      type="text"
                      name="city"
                      onChange={setCustomerValue}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="region">Region:</Label>
                    <Input
                      type="text"
                      name="region"
                      onChange={setCustomerValue}
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
                      onChange={setCustomerValue}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="country">Country:</Label>
                    <Input
                      type="text"
                      name="country"
                      onChange={setCustomerValue}
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
                      onChange={setCustomerValue}
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input
                      name="phone"
                      onChange={setCustomerValue}
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
          <Button color="secondary" onClick={props.close}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }