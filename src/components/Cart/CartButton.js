import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartButtonActions } from "../../store/cart-button";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.addtocart.totalQuantity);

  const toggleHandler = () => {
    dispatch(cartButtonActions.cartToggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
