import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PlusSign from './addPng.png'
import AddStaff from './addStaff'

const StaffModal = ()=>{
    
    const [show, setShow] = useState(false);
    // The Hook, and associated function's are taken from BS example in the docs.
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {/* Inside my Button, I've using a symbol/image I downloaded instead of text */}
            <Button variant="primary" onClick={handleShow}>
                <img width="40px" src={PlusSign}></img> 
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Staff Member</Modal.Title>
                </Modal.Header>
                {/* The component from the 2nd FE tutorial is being used here */}
                <Modal.Body> <AddStaff></AddStaff></Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default StaffModal
