import { useOutletContext } from "react-router";
import CartItem from "./CartItem/CartItem";
import styles from "./CartPage.module.css"

const CartPage = () => {
	const [items, setItemAmount] = useOutletContext();
	return (
		<div className={styles.CartPageContainer}>
			{items.map((item) => {
                if (item.amount > 0){
                    return <CartItem key={item.name} item={item} />;

                }
				
			})}
		</div>
	);
};

export default CartPage;
