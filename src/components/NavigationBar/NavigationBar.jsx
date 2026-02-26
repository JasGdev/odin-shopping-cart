import { Outlet, Link } from 'react-router';
import styles from "./NavigationBar.module.css"

const NavigationBar = () => {
	return (
		<div>
			<div className={styles.navigationDiv}>
				<Link className={styles.link} to="home">Home</Link>
				<Link className={styles.link} to="shop">Shop</Link>
				<Link className={styles.link} to="cart">Cart</Link>
                
			</div>
			<Outlet />
		</div>
	);
};
export default NavigationBar;
