import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function NotFound() {

    return (
        <div className="d-flex justify-content-center flex-column align-items-center gap-3 mt-5">
            <h2>✧ ERROR 404 ✧</h2>
            {/* <h4>La ruta que intentas consultar no existe.</h4> */}
            <h4>No hay pizzas en este lugar...</h4>
            <Nav>
                <Link to="/" className="brand-style">
                    <Button className="mx-3 py-3 btn-style2" variant="primary">
                        🍕 IR A INICIO 🍕
                    </Button>
                </Link>
            </Nav>
        </div>
    )
}