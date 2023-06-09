import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context/Context';
import './ShoppingCart.scss'

function ShoppingCart() {
  const navigate = useNavigate();
  const {total, update, getTotalPriceFromCart } = useContext(Context);
  

  useEffect(() => {
    getTotalPriceFromCart();
  }, [update]);
  return (
    <div className="ShoppingCart">
      <div className="ShoppingCart__container">
        <button
          onClick={ () => navigate('/customer/checkout') }
          type="button"
          className='ShoppingCard__total'
          data-testid="customer_products__button-cart"
          disabled={ +total === 0 }
        >
          <p 
          className='Products__total'
          data-testid="customer_products__checkout-bottom-value">
            Preço total de : R$ {(total.toString(2)).replace(/\./g, ',')} 
          </p>
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
