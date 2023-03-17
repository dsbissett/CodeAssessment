import { useState } from "react";
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
  Button,
} from "reactstrap";

export default function CustomerEditModal(props) {
  const [customer, setCustomer] = useState(props.customer);

  const updateCustomer = (e) => {
    props.customer[e.target.name] = e.target.value;
    setCustomer(props.customer);
  };

  const handleSubmit = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    };

    const response = await fetch(props.updateRoute, requestOptions).catch((error) =>
      console.log(error)
    );

    props.close();
  };

  return (
    <Modal isOpen={props.isOpen} {...props}>
      <ModalHeader>Edit Customer</ModalHeader>
      <ModalBody>
        <Form id="customerEditForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="companyName">Company Name:</Label>
            <Input
              type="text"
              name="companyName"
              onChange={updateCustomer}
              defaultValue={props.customer.companyName}
            />
          </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="contactName">Contact Name:</Label>
                <Input
                  type="text"
                  name="contactName"
                  onChange={updateCustomer}
                  defaultValue={props.customer.contactName}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="contactTitle">Contact Title:</Label>
                <Input
                  type="text"
                  name="contactTitle"
                  onChange={updateCustomer}
                  defaultValue={props.customer.contactTitle}
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
                  onChange={updateCustomer}
                  defaultValue={props.customer.address}
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
                  onChange={updateCustomer}
                  defaultValue={props.customer.city}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="region">Region:</Label>
                <Input
                  type="text"
                  name="region"
                  onChange={updateCustomer}
                  defaultValue={props.customer.region}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="postalCode">Postal Code:</Label>
                <Input
                  type="number"
                  name="postalCode"
                  onChange={updateCustomer}
                  defaultValue={props.customer.postalCode}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="country">Country:</Label>
                <Input
                  type="text"
                  name="country"
                  onChange={updateCustomer}
                  defaultValue={props.customer.country}
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
                  onChange={updateCustomer}
                  defaultValue={props.customer.fax}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                  name="phone"
                  onChange={updateCustomer}
                  defaultValue={props.customer.phone}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="primary" onClick={() => handleSubmit(customer)}>
          Update
        </Button>
        <Button variant="secondary" onClick={props.close}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
