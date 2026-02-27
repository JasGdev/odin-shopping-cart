import styles from './ItemCard.module.css';
import { useState } from 'react';
import { useOutletContext } from "react-router";


const ItemCard = ({item}) => {
	const [items, setItems, setItemAmount] = useOutletContext();

	const [itemCount, setItemCount] = useState(0);
	

	const handleDecrement = () => {
		if (itemCount > 0) {
			setItemCount((prev) => Number(prev) - 1);
		}
	};

	const handleAddToCart = () => {
		console.log(item.name)
		console.log(item.amount)
		setItemAmount(item.name, item.amount + Number(itemCount))
	}

	return (
		<div className={styles.itemCardContainer}>
			<img src={item.img} alt={`Image of ${item.name}`} />

			<div className={styles.itemLabel}>
				{item.name + ` $${item.price}`}
			</div>
			<div className={styles.controlDiv}>
				<button
					onClick={() =>
						setItemCount((prev) => Number(prev) + 1)
					}
					className={styles.add}
				>
					+
				</button>
				<button
					onClick={handleDecrement}
					className={styles.minus}
				>
					-
				</button>
				<input
					type="number"
					name=""
					id=""
					value={itemCount}
					onChange={(e) => setItemCount(e.target.value)}
				/>
				<button onClick={handleAddToCart} className={styles.addToCart}>
					🛒
				</button>
			</div>
		</div>
	);
};

export default ItemCard;
