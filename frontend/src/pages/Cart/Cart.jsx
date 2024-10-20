import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { products } from "../../assets/assets";
import './Cart.css'
const CartPage = () => {
  const { cartData, removeFromCart, getTotalAmount } = useContext(StoreContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cartData).map((ModelNo) => {
              console.log(cartData)
              const product = products.find((prod) => prod.ModelNo === ModelNo);
              if (!product) {
                return (
                  <p>
                    Hello
                  </p>
                ); 
              }
              return (
                <tr key={ModelNo}>
                  <td>
                    <img src={product.image} alt={product.name} />
                    {product.name}
                  </td>
                  <td>{product.price} Rs</td>
                  <td>{cartData[ModelNo]}</td>
                  <td>
                    <button onClick={() => removeFromCart(ModelNo)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        
        <h2>Cart Summary</h2>

        <p>Amount:{getTotalAmount()} Rs</p>
        <p>Delivery Fee:Rs{getTotalAmount()==0?0:100}</p>
        <p>Total Amount: Rs{getTotalAmount()>0?getTotalAmount()+100:0}</p>
        
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
