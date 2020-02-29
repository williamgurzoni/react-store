import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = props =>
  props.hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );

const mapStateToProps = state => ({
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(CartDropdown);
