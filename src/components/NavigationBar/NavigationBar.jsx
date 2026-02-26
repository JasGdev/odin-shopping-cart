import { Outlet, Link } from 'react-router';
import styles from "./NavigationBar.module.css"

const NavigationBar = () => {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.navigationDiv}>
				<Link className={styles.link} to="/">Home</Link>
				<Link className={styles.link} to="shop">Shop</Link>
				<Link className={styles.link} to="cart">Cart</Link>
                
			</div>
			<Outlet />
		</div>
	);
};
export default NavigationBar;
