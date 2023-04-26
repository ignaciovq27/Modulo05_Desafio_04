// css
import "./MyNavbar.css"

//components
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function MyNavbar() {
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

                        <div>
                            <Nav>
                                <Link to="/shopping-cart" className="brand-style">
                                    <Button className="mx-3 py-1 btn-style2" variant="warning"><span className="span-style">🛒 $999.999</span></Button>
                                </Link>

                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}