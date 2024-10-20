import React from 'react';
import '../SunGlass/Sunglass.css'
import { assets, products } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const ContactLens = () => {
  const navigate = useNavigate();

  const onClickHandler = (name) => {
    navigate(`/product/${name}`);
  };

  return (
    <div className="productList-container">
      <div className="cover">
        <img src={assets.sunglasscover} alt="" />
      </div>
      <h1>Contact Lens</h1>

      <div className="product-list">
        {products.map((product, index) => {
          if (product.category === 'lens')
            return (
              <div
                className="products"
                key={index}
                onClick={() => onClickHandler(product.name)}
              >
                <img src={product.image} alt={product.name} />
                <p className="name">{product.name}</p>
                <p className="price">Rs {product.price}</p>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default ContactLens;
