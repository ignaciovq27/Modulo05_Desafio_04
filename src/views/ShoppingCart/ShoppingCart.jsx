// css

//components
import { useContext } from "react";
import { Context } from "../../MyContext";

export default function ShoppingCart() {

  const { cartAmount } = useContext(Context)

  return (
    <div className="home-container">
      <h4 className="mt-4 mb-0">Detalle del pedido:</h4>
      <h2 className="my-3">Total: <span className="text-primary">{cartAmount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span></h2>
    </div>
  );
}
