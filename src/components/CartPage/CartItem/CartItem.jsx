import { useOutletContext } from 'react-router';
import styles from './CartItem.module.css';
import { useState, useEffect} from 'react';

const CartItem = ({ item, ariaLabel, role }) => {

	const [items, setItems, setItemAmount] = useOutletContext();
	const [itemCount, setItemCount] = useState(item.amount);

	useEffect (() => {
		setItemAmount(item.name, Number(itemCount))
	}, [itemCount])

	const handleDecrement = () => {
		if (itemCount > 0) {
			setItemCount((prev) => Number(prev) - 1);
		}
	};

	return (
		<div
			className={styles.cartItemContainer}
			aria-label={ariaLabel}
			role={role}
		>
			<div className={styles.cartItemImgContainer}>
				<img src={item.img} alt="" />
			</div>

			<div className={styles.control}>
				<div className={styles.name}>{item.name}</div>
				<button onClick={() => setItemAmount(item.name, null)} className={styles.delete}>X</button>
				<div className={styles.inputDiv}>
					<button onClick={ () => setItemCount(prev => Number(prev) + 1)}>+</button>
					<button onClick={handleDecrement}>-</button>
					<input
						type="number"
						value={itemCount}
						onChange={(e) =>
							setItemCount(e.target.value)
						}
						onBlur={(e) =>
							{setItemAmount(item.name, Number(e.target.value))}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
