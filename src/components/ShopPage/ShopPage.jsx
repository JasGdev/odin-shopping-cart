import { findByAltText } from '@testing-library/react';
import styles from './ShopPage.module.css';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard/ItemCard';
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

const ShopPage = () => {
	const [items, setItems] = useState([
		new Product('Donut', 3, 0, donutImg),
		new Product('Chocolate', 5, 0, chocoImg),
	]);
	let itemCount = 0;
	items.forEach((item) => 
	itemCount += item.amount)

	console.log(itemCount)

	function setItemAmount(productName, amount){
		let newItems = items.map((item) => {
			if (item.name === productName){
				item.amount = amount
			}

			return item
		})
		setItems(newItems)
	}

	return (
		<div>
			<div>
				<h2>Ok, I lied we only sell delicous desserts</h2>
				<h3>Have a looks!</h3>
			</div>
			<div className={styles.productDisplay}>
				{items.map((item) => {
					return <ItemCard key={item.name} item={item} setItemAmount={setItemAmount} />;
				})}
			</div>
		</div>
	);
};

export default ShopPage;
