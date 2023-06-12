import styles from "./product.module.css";
import {
  AiOutlineDownCircle,
  AiOutlineDelete,
  AiOutlineUpCircle,
} from "react-icons/ai";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>Name of Product : {props.title}</p>
      <p>Price : {props.price}</p>
      <input type="text" className={styles.title} value={props.title} />

      <button className={styles.btn} onClick={props.onDecrement}>
        {props.quantity > 1 ? <AiOutlineDownCircle /> : <AiOutlineDelete />}
      </button>
      <span>{props.quantity}</span>
      <button className={styles.btn} onClick={props.onIncrement}>
        <AiOutlineUpCircle />
      </button>
      <button className={styles.btn} onClick={props.onRemove}>
        Delete
      </button>
    </div>
  );
};

export default Product;
