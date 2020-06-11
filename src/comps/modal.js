import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
                <svg fill="white" width="50" height="50"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Staff Member</Modal.Title>
                </Modal.Header>
                {/* The component from the 2nd FE tutorial is being used here */}
                <Modal.Body> <AddStaff></AddStaff></Modal.Body>

                <Modal.Footer>
                    <Button className="submito" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default StaffModal
