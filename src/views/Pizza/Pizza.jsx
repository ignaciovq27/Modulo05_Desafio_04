// css
import "../Pizza/Pizza.css"

//components
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../MyContext";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

export default function Pizza() {

  const { pizzas, cartAmount, setCartAmount, pizzasCount, setPizzasCount, setShowModal, addPizza } = useContext(Context)
  const params = useParams()

  const getPizzaById = (id) => pizzas.find((pizza) => pizza.id === id)
  const pizza = getPizzaById(params.id)
  // console.log(pizza)

  const pizzaPrice = pizza.price
  // console.log(pizzaPrice)

  const HandleOnClick = (e) => {
    setCartAmount((cartAmount) => cartAmount + pizzaPrice)
    setPizzasCount((pizzasCount) => pizzasCount + 1)
    setShowModal(true)
    addPizza(pizza.id, pizza.img, pizza.name, pizza.price, 1);
  }

  return (
    <div className="pizza-container" key={pizza.id}>
      <div className="margin-style">
        <Card className="mb-3 card-style">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center">
              <Card.Img className="card-img-style object-fit img-fluid" src={pizza.img} />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title className="text-style">{pizza.name}</Card.Title>
                <hr></hr>
                <Card.Text>
                  {pizza.desc}
                </Card.Text>
                <h5>Ingredientes:</h5>
                <ul className="ul-style">
                  {pizza.ingredients.map((ingredient, i) => (
                    <li className="text-style2" key={i}>🍕{ingredient}</li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <h2>Precio: {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h2>
                <Button
                  className="mx-3 py-2 btn-style"
                  variant="warning"
                  onClick={HandleOnClick}
                >
                  Añadir 🛒
                </Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}


