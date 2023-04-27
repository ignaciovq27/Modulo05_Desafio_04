//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react'

export const Context = createContext();

export function MyContext({ children }) {

    const [pizzas, setPizzas] = useState([])
    const [cartAmount, setCartAmount] = useState(0)
    const [pizzasCount, setPizzasCount] = useState(0)

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // Consulta a la API.
            const url = "/pizzas.json"
            const response = await fetch(url)
            const data = await response.json()

            setPizzas(data)
            console.log(pizzas)
        }
        catch (error) {
            console.log(error)
        }
    }

    const globalState = { pizzas, cartAmount, setCartAmount, pizzasCount, setPizzasCount }
    return <Context.Provider value={globalState}>{children}</Context.Provider>
}