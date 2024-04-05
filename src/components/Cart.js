import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.item);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItem())
    }
  
    return (
        <div className="text-center p-4 m-4">
            <h1 className="text-2xl font-bold">Checkout Cart Items</h1>
            <div className="w-6/12 m-auto border border-solid">
                 <ItemList item={cartItems}/>
                 <button className="bg-black text-white p-4 m-4 float-right" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="text-center">{cartItems.length == 0 ? <h1>Please add some items</h1> : ''}</div>
        </div>
    
    )
}

export default Cart;