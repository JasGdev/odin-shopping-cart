import styles from './ShopPage.module.css';
import { useState, useEffect } from 'react';
import ItemCard from './ItemCard/ItemCard';
import {useOutletContext} from 'react-router'


const ShopPage = () => {
	const [items, setItems] = useOutletContext();

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
		<div className={styles.shopContainer}>
			{/* <div className={styles.shopTitle}>
				<h2>Ok, I lied we only sell delicous desserts</h2>
				<h3>Have a looks!</h3>
			</div> */}
			<div className={styles.productDisplay}>
				{items.map((item) => {
					return <ItemCard key={item.name} item={item} setItemAmount={setItemAmount} />;
				})}
			</div>
		</div>
	);
};

export default ShopPage;
