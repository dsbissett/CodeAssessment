import { Component } from "react";

export class CustomerEditModalAlt extends Component {
  constructor(props) {
    super(props);
    this.setState({
        isOpen: false,
        customer:{}
    });
  }

  updateCustomer(){

  }

  handleSubmit(){

  }

  closeModal(){
    
  }

  render() {
    <Modal isOpen={this.state.isOpen}>
      <ModalHeader closeButton>Modal heading</ModalHeader>
      <ModalBody>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="companyName">Company Name:</Label>
            <Input
              type="text"
              name="companyName"
              onChange={this.updateCustomer}
              defaultValue={this.state.customer.companyName}
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="contactName">Contact Name:</Label>
                <Input
                  type="text"
                  name="contactName"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.contactName}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="contactTitle">Contact Title:</Label>
                <Input
                  type="text"
                  name="contactTitle"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.contactTitle}
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
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.address}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="city">City:</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.city}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="region">Region:</Label>
                <Input
                  type="text"
                  name="region"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.region}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="postalCode">Postal Code:</Label>
                <Input
                  type="number"
                  name="postalCode"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.postalCode}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="country">Country:</Label>
                <Input
                  type="text"
                  name="country"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.country}
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
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.fax}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                  name="phone"
                  onChange={this.updateCustomer}
                  defaultValue={this.state.customer.phone}
                />
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
        <Button
          variant="primary"
          onClick={() => this.handleSubmit(this.state.customer)}
        >
          Update
        </Button>
        <Button variant="secondary" onClick={this.closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>;
  }
}
