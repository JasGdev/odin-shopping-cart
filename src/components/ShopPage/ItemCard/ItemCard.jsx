import styles from './ItemCard.module.css';
import { useState } from 'react';

const ItemCard = ({
	item, setItemAmount
}) => {
	const [itemCount, setItemCount] = useState([item.amount]);
	

	const handleDecrement = () => {
		if (itemCount > 0) {
			setItemCount((prev) => Number(prev) - 1);
		}
	};

	const handleAddToCart = () => {
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
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ItemCard;
