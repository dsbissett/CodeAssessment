import React, { useState, useEffect, useLayoutEffect } from "react";
import { Row, Col, Button, Table } from "reactstrap";
import CustomerEditModal from "./CustomerEditModal";
import CustomerAddModal from "./CustomerAddModal";

export default function CustomersGrid (props) {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchCustomersData = async () => {
    try {
      const response = await fetch("customers");
      const data = await response.json();
      return { success: true, data: data };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchCustomersData();
      if (result.success) {
        setCustomers(result.data);
        setLoading(false);
      }
    })();
  }, []);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const openEditModal = (customer) => {
    setCustomer(customer);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div>
      {loading ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        <div>
          <Row>
            <Col className="order-first">
              <h1 id="tabelLabel" className="justify-content-start">
                Customer list
              </h1>
            </Col>
            <Col className="offset-md-7">
              <Button className="offset-md-7" onClick={toggleAddModal}>
                Add
              </Button>
            </Col>
          </Row>
          <Table
            className="table table-striped"
            aria-labelledby="tabelLabel"
            hover
          >
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contact Title</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((x) => (
                <tr key={x.customerId} onClick={() => openEditModal(x)}>
                  <td>{x.companyName}</td>
                  <td>{x.contactName}</td>
                  <td>{x.contactTitle}</td>
                  <td>{x.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <CustomerEditModal
            customer={customer}
            isOpen={isEditModalOpen}
            close={closeEditModal}
          />
          <CustomerAddModal isOpen={isAddModalOpen} close={toggleAddModal} />
        </div>
      )}
    </div>
  );
}
