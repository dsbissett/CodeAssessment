import React, { Component, useState } from 'react';
import { Modal, ModalBody, Form, FormGroup, Label, Input, Col, Row, ModalFooter, ModalHeader, Table, Button } from 'reactstrap';
import UpdateCustomerModal3 from './UpdateCustomerModal3';


export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { customers: [], customer: {}, loading: true, isOpen: false, modalIsOpen: false, setModalIsOpen: false };    
  }

  openModal = (e) => this.setState({  customer: e, isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  updateCustomer = (e) => {
    this.state.customer[e.target.name] = e.target.value;
  }

  closeCreateModal = () => this.setState({ modalIsOpen: false});

  openCreateModal = () => this.setState({ modalIsOpen: true });

  async handleSubmit(e) {
    console.log(e);
    let requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(e)
    };

    const response = await fetch('customers', requestOptions);
    this.closeModal();
    alert("Customer updated!")  
  }

  componentDidMount() {
    this.populateCustomerData();
  }  

  render() {      
      return (
      <div>
        <div>
          <Row>
            <Col className="order-first">
              <h1 id="tabelLabel" className="justify-content-start" >Customer list</h1>
            </Col>
            <Col className="offset-md-7">
            <Button className="offset-md-7" onClick={this.openCreateModal}>Add</Button>  
              
            </Col>
          </Row>
        
        
        </div>
        
               
        <Table className='table table-striped' aria-labelledby="tabelLabel" hover>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Contact Name</th>
              <th>Contact Title</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map(customers =>
              <tr key={customers.customerID} onClick={() => this.openModal(customers)}>
                <td>{customers.companyName}</td>
                <td>{customers.contactName}</td>
                <td>{customers.contactTitle}</td>
                <td>{customers.phone}</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader closeButton>
            Modal heading
          </ModalHeader>
          <ModalBody>
          <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="companyName">Company Name:</Label>
            <Input type="text" name="companyName" onChange={this.updateCustomer} defaultValue={this.state.customer.companyName} />
        </FormGroup>
        <Row>
            <Col>
                <FormGroup>
                    <Label for="contactName">Contact Name:</Label>
                    <Input type="text" name="contactName" onChange={this.updateCustomer} defaultValue={this.state.customer.contactName} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="contactTitle">Contact Title:</Label>
                    <Input type="text" name="contactTitle" onChange={this.updateCustomer} defaultValue={this.state.customer.contactTitle} />
                </FormGroup>
            </Col>
            
        </Row>        
        <Row>
            <Col>
                <FormGroup>
                    <Label for="address">Address:</Label>
                    <Input type="text" name="address" onChange={this.updateCustomer} defaultValue={this.state.customer.address} />
                </FormGroup>
            </Col>
            
        </Row>
        <Row>
            <Col>
                <FormGroup>
                    <Label for="city">City:</Label>
                    <Input type="text" name="city" onChange={this.updateCustomer} defaultValue={this.state.customer.city} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="region">Region:</Label>
                    <Input type="text" name="region" onChange={this.updateCustomer} defaultValue={this.state.customer.region} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="postalCode">Postal Code:</Label>
                    <Input type="number" name="postalCode" onChange={this.updateCustomer} defaultValue={this.state.customer.postalCode} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="country">Country:</Label>
                    <Input type="text" name="country" onChange={this.updateCustomer} defaultValue={this.state.customer.country} />
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <FormGroup>
                    <Label for="fax">Fax:</Label>
                    <Input name="fax" onChange={this.updateCustomer} defaultValue={this.state.customer.fax} />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input name="phone" onChange={this.updateCustomer} defaultValue={this.state.customer.phone} />
                </FormGroup>
            </Col>
        </Row>
        {/* <br/>
        <Row>
          <Col/>
          <Col>
            <Input type="submit"  value="Submit" onClick={this.handleSubmit} />
          </Col>            
          <Col/>
        </Row>         */}
      </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="primary" onClick={() => this.handleSubmit(this.state.customer)}>Update</Button>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

        <UpdateCustomerModal3 isOpen={this.state.modalIsOpen} closeModal={this.closeCreateModal} customer={this.state.customers[0]}></UpdateCustomerModal3>

      </div>
    );
  }

  async populateCustomerData() {
    const response = await fetch('customers');
    const data = await response.json();
    this.setState({ customers: data, loading: false });
  }
}