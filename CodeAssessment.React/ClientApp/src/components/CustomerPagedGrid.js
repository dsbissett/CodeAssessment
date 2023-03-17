import React, { useState, useEffect, useLayoutEffect } from "react";
import { Row, Col, Button, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
// import CustomerEditModal from "./CustomerEditModal";
// import CustomerAddModal from "./CustomerAddModal";

export default function CustomerPagedGrid(props) {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [updateRoute, setUpdateRoute] = useState("");
  const [pageNumber, setPageNumber] = useState();
  const [pageSize, setPageSize] = useState();
  const [pageCount, setPageCount] = useState();

  const fetchCustomersData = async (pageNumber, pageSize = 12) => {
    try {
      const response = await fetch("customers/?pageNumber=" + pageNumber + "&pageSize=" + pageSize);
      const data = await response.json();
      
      setPageNumber(data.pageNumber);
      setPageSize(data.pageSize);
      setPageCount(data.pageCount);
      return { success: true, data: data.items };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await fetchCustomersData(0, 12);
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
    setUpdateRoute(customer.links.update.href);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handlePaginationClick = async (e, i) => {
    console.log("Page: " + i);
    e.preventDefault();
    setPageNumber(i);
    if(i < 0){
        return;
    }
    const result = await fetchCustomersData(i);
    setCustomers(result.data)
  }

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
          <Row>
          <Pagination>
            <PaginationItem disabled={pageNumber <= 0}>
            <PaginationLink
                onClick={async e => await handlePaginationClick(e, pageNumber - 1)}
                previous
                href="#"
              />              
            </PaginationItem>           
            {
                [...Array(pageCount)].slice(0,pageCount).map((x,i) =>
                <PaginationItem active={i === pageNumber} key={i}>
                    <PaginationLink onClick={async e =>await handlePaginationClick(e,i)} href="#">
                        {i + 1}
                    </PaginationLink>                    
                </PaginationItem>
            )}
            <PaginationItem disabled={pageNumber >= pageCount - 1}>
              
              <PaginationLink
                onClick={async e => await handlePaginationClick(e, pageNumber + 1)}
                next
                href="#"
              />
              
            </PaginationItem>
          </Pagination>
          </Row>
          

          {/* <CustomerEditModal
            customer={customer}
            isOpen={isEditModalOpen}
            close={closeEditModal}
            updateRoute={updateRoute}
          />
          <CustomerAddModal isOpen={isAddModalOpen} close={toggleAddModal} /> */}
        </div>
      )}
    </div>
  );
}
