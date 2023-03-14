import React, { Component, useState } from 'react';
import { Modal, ModalBody, Form, FormGroup, Label, Input, Col, Row, ModalFooter, ModalHeader, Table, Button } from 'reactstrap';



function UpdateCustomerModal(props) {    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const updateCustomer = (e) => console.log(e);
    const handleSubmit = (e) => console.log(e);
    const onModalClose = () => {
        props.onCloseModal();
    }
    
    return(
    <div>
      <Modal isOpen={props.isModalOpen} toggle={props.onModalClose} {...props}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.onCloseModal()}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={onModalClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    );
}

export default UpdateCustomerModal;