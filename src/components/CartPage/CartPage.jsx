import { useOutletContext } from "react-router";
import CartItem from "./CartItem/CartItem";

const CartPage = () => {
	const [items, setItemAmount] = useOutletContext();
	return (
		<div>
			{items.map((item) => {
				return <CartItem key={item.name} item={item} />;
			})}
		</div>
	);
};

export default CartPage;
