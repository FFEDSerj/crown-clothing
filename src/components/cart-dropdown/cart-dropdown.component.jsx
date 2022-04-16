import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartBackdrop,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate("/checkout");
  };

  const handleCartBackdropClick = (e) => {
    const isContains = dropdownRef.current.contains(e.target);
    if (!isContains) {
      dispatch(setIsCartOpen(false));
    }
  };

  return (
    <CartBackdrop onClick={handleCartBackdropClick} className="backdrop">
      <CartDropdownContainer ref={dropdownRef}>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
    </CartBackdrop>
  );
};

export default CartDropdown;
