import styles from "./CartItem.module.css";
import { useState } from "react";

const CartItem = ({ item }) => {
	const [itemCount, setItemCount] = useState([item.amount]);

	const handleDecrement = () => {
		if (itemCount > 0) {
			setItemCount((prev) => Number(prev) - 1);
		}
	};

	return (
		<div className={styles.cartItemContainer}>
			<div className={styles.cartItemImgContainer}>
				<img src={item.img} alt="" />
			</div>

			<div className={styles.control}>
				<div className={styles.name}>{item.name}</div>
				<button className={styles.delete}>X</button>
				<div className={styles.inputDiv}>
					<button>+</button>
					<button>-</button>
					<input type="number" value={item.amount} onChange={(e) => setItemCount(item.name, e.target.value)}/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
