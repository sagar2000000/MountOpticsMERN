import React, { useState ,useContext} from 'react';
import './ProductsDetails.css';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const ProductsDetails = () => {
  const {addToCart} = useContext(StoreContext)


  const { name } = useParams();
  
  const product = products.find((p) => p.name === name);
  
  const [displayImage, setDisplayImage] = useState(product.image);

  return (
    <div className="product-details">
      <div className="image-container">
        <div className="display-image">
          <img src={displayImage} alt={product.name} />
        </div>
        
        {product.imageB && (
          <div className="extra-image-container">
            <div
              className="extra-image"
              onClick={() => setDisplayImage(product.image)}
            >
              <img src={product.image} alt={product.name} />
            </div>
            <div
              className="extra-image"
              onClick={() => setDisplayImage(product.imageB)}
            >
              <img src={product.imageB} alt={product.name} />
            </div>
          </div>
        )}
      </div>

      {(product.category === "sunglass" || product.category === "eyeglass") && (
        <div className="detail-container">
          <div className="detail">
            <p>MOUNTOPTICS</p>
            <h2>{product.name}</h2>
            <p id="price">Rs {product.price}</p>
            <h2>Technical Information:</h2>
            <p>Frame Material: {product.FrameMaterial}</p>
            <p>Temple Material: {product.TempleMaterial}</p>
            <p>Frame Shape: {product.FrameShape}</p>
            <p>Model No: {product.ModelNo}</p>
            <p>Frame Size: {product.FrameSize}</p>
            <p>Frame Color: {product.Framecolor}</p>
          </div>
          <div className="cart-div">
            <button id="cart-btn" onClick={()=>addToCart(product.ModelNo)}>ADD TO CART</button>
          </div>
        </div>
      )}



{(product.category === "lens") && (
        <div className="detail-container">
          <div className="detail">
            <p>MOUNTOPTICS</p>
            <h2>{product.name}</h2>
            <p id="price">Rs {product.price}</p>
            <h2>Specification</h2>
            <p> BaseCurve: {product.BaseCurve} </p>
            <p> Diameter: {product.Diameter}</p>
            <p> WaterContent: {product.WaterContent}</p>
            <p> Packaging: {product.Packaging}</p>

          </div>
          <div className="cart-div">
            <button id="cart-btn"  onClick={()=>addToCart(product.ModelNo)}>ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
