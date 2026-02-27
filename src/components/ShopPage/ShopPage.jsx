import styles from "./ShopPage.module.css";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { useOutletContext } from "react-router";

const ShopPage = () => {
	const [items, setItems, setItemAmount] = useOutletContext();

	return (
		<div className={styles.shopContainer}>
			{/* <div className={styles.shopTitle}>
				<h2>Ok, I lied we only sell delicous desserts</h2>
				<h3>Have a looks!</h3>
			</div> */}
			<div className={styles.productDisplay}>
				{items.map((item) => {
					return (
						<ItemCard
							key={item.name}
							item={item}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ShopPage;
