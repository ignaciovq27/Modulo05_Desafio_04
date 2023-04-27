//components
import React from "react";
import { useContext } from "react";
import { Context } from "../../MyContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyModal() {
    const { showModal, setShowModal } = useContext(Context)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title ><h3 className="m-0 ">🍕 ¡Mamma mía! </h3></Modal.Title>
                </Modal.Header>
                <Modal.Body><h5 className="d-flex justify-content-center m-0 py-2">¡Se ha añadido la pizza al carrito 🍕🛒!</h5></Modal.Body>
                <Modal.Footer className="d-flex justify-content-center m-0 py-3">
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}