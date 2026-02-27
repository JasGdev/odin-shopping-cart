import { useOutletContext } from "react-router";
import CartItem from "./CartItem/CartItem";
import styles from "./CartPage.module.css"

const CartPage = () => {
	const [items, setItems, setItemAmount] = useOutletContext();
	return (
		<div className={styles.CartPageContainer} aria-label="Cart Page" role="region">
			{items.map((item) => {
                if (item.amount !== null){
                    return <CartItem key={item.name} item={item} ariaLabel={`Cart Item ${item.name}`} role="group"/>;
                }
				
			})}
		</div>
	);
};

export default CartPage;
