import { findByAltText } from '@testing-library/react';
import styles from './ShopPage.module.css';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard/ItemCard';
import donutImg from '../../assets/donut.jpg'
import chocoImg from '../../assets/choco.jpg'

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
		new Product('donut', 3, 0, donutImg),
		new Product('chocolate', 5, 0, chocoImg)
	]);

	return (
		<div>
			<div>
				<h2>Ok, I lied we only sell delicous desserts</h2>
				<h3>Have a looks!</h3>
			</div>
            {items.map((item) => {
                return <ItemCard key = {item.name} item = {item} />
            })}
		</div>
	);
};

export default ShopPage;
