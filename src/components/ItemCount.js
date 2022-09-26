import { useEffect, useState } from "react"

const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState((initial));

    useEffect(() => {
        setCount(initial);
    }, []);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial+1){
            setCount(count - 1);
        }
    }

    return (
        <div className="counter">
            <div className="botonMenos">
            <button disabled={count <= 1} onClick={decrement}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increment}>+</button>
            </div>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} >Comprar</button>
            </div>
        </div>
    );
}

export default ItemCount;