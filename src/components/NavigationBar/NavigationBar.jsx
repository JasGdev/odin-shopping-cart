import { Outlet, Link } from 'react-router';
import styles from './NavigationBar.module.css';
import { useState } from 'react';
import donutImg from '../../assets/donut.jpg';
import chocoImg from '../../assets/choco.jpg';

class Product {
	constructor(name, price, amount, img) {
		this.name = name;
		this.price = price;
		this.amount = amount;
		this.img = img;
	}
}

const NavigationBar = () => {
	const [items, setItems] = useState([
		new Product('Donut', 3, 0, donutImg),
		new Product('Chocolate', 5, 0, chocoImg),
	]);
	let itemCount = 0;
	items.forEach((item) => (itemCount += item.amount));

	console.log(itemCount);

	return (
		<div className={styles.pageContainer}>
			<div className={styles.navigationDiv}>
				<Link className={styles.link} to="/">
					Home
				</Link>
				<Link
					items={items}
					setItems={setItems}
					className={styles.link}
					to="shop"
				>
					Shop
				</Link>
				<Link className={styles.link} to="cart">
					Cart
				</Link>
			</div>
			<Outlet />
		</div>
	);
};
export default NavigationBar;
