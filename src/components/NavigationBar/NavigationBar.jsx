import { Outlet, Link } from "react-router";
import styles from "./NavigationBar.module.css";
import { useState, useEffect } from "react";
import donutImg from "../../assets/donut.jpg";
import chocoImg from "../../assets/choco.jpg";

class Product {
	constructor(name, price, amount, img) {
		this.name = name;
		this.price = price;
		this.amount = amount;
		this.img = img;
	}
}

const NavigationBar = () => {
	const [items, setItems] = useState([]);

	function setItemAmount(productName, amount) {
		console.log(items.find((product) => product.name === productName))
		let newItems = items.map((item) => {
			if (item.name === productName) {
				item.amount = amount;
			}

			return item;
		});
		setItems(newItems);
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();

			const newItems = data.map(
				(item) => new Product(item.title, item.price, null, item.image),
			);
			setItems(newItems);
			
		};
		fetchData().catch((err) => {
			console.log(err);
		});
	}, []);

	let itemCount = 0;

	console.log(items)

	items.forEach((item) => (itemCount += item.amount));

	const cartLabel = itemCount == 0 ? "🛒" : `${itemCount} in 🛒`;

	return (
		<div className={styles.pageContainer}>
			<div className={styles.navigationDiv}>
				<Link className={styles.link} to="/">
					Home
				</Link>
				<Link className={styles.link} to="shop">
					Shop
				</Link>
				<Link className={styles.link} to="cart">
					{cartLabel}
				</Link>
			</div>
			<Outlet context={[items, setItems, setItemAmount]} />
		</div>
	);
};

export default NavigationBar;
