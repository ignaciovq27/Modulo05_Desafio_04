// css
import "./gallery.css";

//components
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../MyContext";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Gallery() {

  const { pizzas, cartAmount, setCartAmount, pizzasCount, setPizzasCount, setShowModal } = useContext(Context)


  return (
    <div className="gallery-container p-3">
      {pizzas.map((pizza, i) => {

        const pizzaPrice = pizza.price
        // console.log(pizzaPrice)

        const HandleOnClick = (e) => {
          setCartAmount((cartAmount) => cartAmount + pizzaPrice)
          setPizzasCount((pizzasCount) => pizzasCount + 1)
          setShowModal(true)
        }

        return (
          <div key={i}>
            <div>
              <Card className="card-style">
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                  <Card.Title className="text-style">{pizza.name}</Card.Title>
                  <hr></hr>
                  <h5>Ingredientes:</h5>
                  <ul className="ul-style">
                    {pizza.ingredients.map((ingredient, i) => (
                      <li className="text-style2" key={i}>🍕{ingredient}</li>
                    ))}
                  </ul>
                </Card.Body>
                <ListGroup className="list-group-flush">
                </ListGroup>
                <Card.Body>
                  <h3>{pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
                  <Link to={`/pizza/${pizza.id}`} className="brand-style">
                    <Button className="mx-3 py-2 btn-style">Ver más 👀</Button>
                  </Link>
                  <Button
                    className="mx-3 py-2 btn-style"
                    variant="warning"
                    onClick={HandleOnClick}
                  >
                    Añadir 🛒
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        )
      }
      )}
    </div >
  );
}