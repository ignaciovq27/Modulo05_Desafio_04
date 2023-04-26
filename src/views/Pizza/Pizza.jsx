// css

//components
import { useContext } from "react";
import { Context } from "../../MyContext";
import { useParams } from "react-router-dom";

//
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
//

export default function Pizza() {

  const { pizzas } = useContext(Context)
  const params = useParams()

  const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id)
  const pizza = getPizzaById(params.id)
  // console.log(pizza)

  return (
    <div className="home-container">
      <h2 className="mt-4 mb-0">Pizza {pizza.name}</h2>
      <div key={pizza.id}>
        <div>
          <Card className="card-style">
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
              <Card.Title className="text-style">{pizza.name}</Card.Title>
              <hr></hr>
              <h5>Ingredientes:</h5>
              <ul className="ul-style" >
                {pizza.ingredients.map((ingredient, i) => (
                  <li className="text-style2" key={i}>🍕{ingredient}</li>
                ))}
              </ul>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <Card.Title className="text-style">{pizza.desc}</Card.Title>
            </ListGroup>
            <Card.Body>
              <h3>{pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
              <Link to={`/pizza/${pizza.id}`} className="brand-style">
                {/* <Button className="mx-3 py-2 btn-style">Ver más 👀</Button> */}
              </Link>
              <Button className="mx-3 py-2 btn-style" variant="warning">Añadir 🛒</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  );
}


