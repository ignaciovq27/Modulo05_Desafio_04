// css
import "../ShoppingCart/ShoppingCart.css"

//components
import { useContext } from "react";
import { Context } from "../../MyContext";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


export default function ShoppingCart() {

  const { cartAmount, setCartAmount, cartItems, setCartItems, pizzasCount, setPizzasCount } = useContext(Context)
  // console.log(cartItems)

  const iconFaPlus = <FontAwesomeIcon icon={faPlus} />
  const iconFaMinus = <FontAwesomeIcon icon={faMinus} />

  return (
    <div className="shoppingCart-container">
      <h4 className="my-3 text-center">Detalle del pedido:</h4>
      <Card className="card-style mt-2 p-0">

        {cartItems.map((item, i) => {

          const handleOnClickAdd = (e) => {
            setCartAmount((cartAmount) => cartAmount + item.price)
            setPizzasCount((pizzasCount) => pizzasCount + 1)

            const newCartItems = [...cartItems];
            newCartItems[i].quantity += 1;
            setCartItems(newCartItems);
            console.log(newCartItems);
          }

          const handleOnClickRemove = (e) => {
            if (item.quantity > 0) {
              setCartAmount((cartAmount) => cartAmount - item.price);
              setPizzasCount((pizzasCount) => pizzasCount - 1);

              const newCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                  return {
                    ...cartItem,
                    quantity: cartItem.quantity - 1,
                  };
                }
                return cartItem;
              }).filter((cartItem) => cartItem.quantity > 0);

              setCartItems(newCartItems);
              console.log(newCartItems);
            }
          };

          return (
            <div className=" m-0 p-0" key={item.id}>
              <div className="mx-3 p-0">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <Card.Img className="card-img-style" src={item.img} />
                    <Card.Title className="text-style m-0">{item.name}</Card.Title>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-4">
                    <h3 className="text-primary m-0">
                      {item.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                    </h3>
                    <Button
                      className="btn-style"
                      variant="danger"
                      disabled={item.quantity > 0 ? false : true}
                      onClick={handleOnClickRemove}
                    > {iconFaMinus} </Button>
                    <h3 className="m-0">{item.quantity}</h3>
                    <Button
                      className="btn-style"
                      variant="primary"
                      onClick={handleOnClickAdd}
                    > {iconFaPlus}
                    </Button>
                  </div>
                </Card.Body>
                <hr className="m-0 p-0"></hr>
              </div>
            </div>
          )
        })}

        <div className="d-flex flex-column justify-content-center align-items-center mx-5 my-4">
          {cartAmount > 0
            ?
            <div className="d-flex flex-column justify-content-center align-items-center mx-5 mb-2">
              <h2 className="my-3 span-style">
                🍕 Total: {cartAmount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} 🍕
              </h2>
              <Button
                className="mx-3 py-2 btn-style btnFontSize-style"
                variant="primary"
                disabled={cartAmount > 0 ? false : true}
              // onClick={HandleOnClick}
              > Ir a pagar
              </Button>
            </div>
            :
            <h3 className="my-2">Tu carrito está vacío 🍽️.</h3>
          }
        </div>
      </Card>
    </div >
  );
}
