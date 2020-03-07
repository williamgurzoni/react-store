import React from "react";
import { connect } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppintIcon } from "../../assets/bag.svg";

import "./cart-icon.styles.scss";

const CardIcon = props => (
  <div className="cart-icon" onClick={() => props.toggleCart()}>
    <ShoppintIcon className="shopping-icon" />
    <span className="item-count">{props.cartQuantity}</span>
  </div>
);

const mapStateToProps = state => ({
  cartQuantity: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
