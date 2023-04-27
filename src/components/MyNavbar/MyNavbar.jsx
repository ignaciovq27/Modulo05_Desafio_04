// css
import "./MyNavbar.css"

//components
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../MyContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
// import Form from 'react-bootstrap/Form';

export default function MyNavbar() {

    const { cartAmount, pizzasCount } = useContext(Context)
    return (
        <>
            <div className="sticky">
                <Navbar className="nav-container" bg="primary" variant="dark">
                    <Container fluid className="mx-5 my-1">
                        <div className="d-flex justify-content-center align-items-center gap-5">
                            <div className="me-1">
                                <Nav>
                                    <Link to="/" className="brand-style">
                                        <Navbar.Brand className="navbar-brand-style">
                                            🍕 Pizzería ¡Mamma Mía!
                                        </Navbar.Brand>
                                    </Link>
                                </Nav>
                            </div>
                            {/* <div>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Busca tu pizza..."
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-light">Buscar</Button>
                                </Form>
                            </div> */}
                        </div>

                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <Badge className="mx-0 p-2 badge-style" bg="light" text="dark">{pizzasCount}</Badge>
                            </div>
                            <div>
                                <Nav>
                                    <Link to="/shopping-cart" className="brand-style">
                                        <Button className="mx-3 py-1 btn-style2" variant="warning">
                                            <span className="span-style">
                                                🛒 {cartAmount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                                            </span>
                                        </Button>
                                    </Link>
                                </Nav>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}