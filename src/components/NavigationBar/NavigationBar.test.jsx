import { describe, it, expect } from 'vitest';
import {
	render,
	screen,
	within,
} from '@testing-library/react';
import NavigationBar from './NavigationBar';
import {
	createMemoryRouter,
	RouterProvider,
} from 'react-router';

import HomePage from '../HomePage/HomePage.jsx';
import ShopPage from '../ShopPage/ShopPage';
import CartPage from '../CartPage/CartPage.jsx';
import userEvent from '@testing-library/user-event';

const router = createMemoryRouter([
	{
		path: '/',
		element: <NavigationBar />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'shop', element: <ShopPage /> },
			{ path: 'cart', element: <CartPage /> },
		],
	},
]);

async function moveToShop(user) {
	await user.click(screen.getByRole('link', { name: /shop/i }));
}

async function add5Items(user){
	const shopLink = screen.getByRole('link', {
			name: 'Shop',
		});
		await user.click(shopLink);
		const titleEl = await screen.findByText(/Fjallraven/i);
		const card = titleEl.closest(
			'div[class^="_itemCardContainer"]',
		);

		const plusBtn = within(card).getByRole('button', {
			name: '+',
		});
		const minusBtn = within(card).getByRole('button', {
			name: '-',
		});
		const qtyInput = within(card).getByRole('spinbutton');
		const addToCartBtn = within(card).getByRole('button', {
			name: '🛒',
		});

		await user.clear(qtyInput);
		await user.type(qtyInput, '5');
		await user.click(addToCartBtn);
}


describe('Navigation', () => {
	it('renders home page', () => {
		render(<RouterProvider router={router} />);
		expect(
			screen.getAllByRole('heading')[0].textContent,
		).toMatch(/Welcome to our shop/i);
	});

	it('move to shop', async () => {
		const user = userEvent.setup();
		render(<RouterProvider router={router} />);
		await moveToShop(user)
		expect(router.state.location.pathname).toBe('/shop');
	});

	it('move to cart', async () => {
		const user = userEvent.setup();
		render(<RouterProvider router={router} />);
		const shopLink = screen.getByRole('link', {
			name: '🛒',
		});
		expect(shopLink).toBeInTheDocument();
		await user.click(shopLink);
		expect(router.state.location.pathname).toBe('/cart');
	});
});

describe('Shop Component', () => {
	it('item loads after moving to shop', async () => {
		const user = userEvent.setup();
		render(<RouterProvider router={router} />);
		await moveToShop(user)
		expect(
			await screen.findByText(/Fjallraven/i),
		).toBeInTheDocument();
	});

	it('increment, decrement, setting value, adding to cart', async () => {
		const user = userEvent.setup();
		render(<RouterProvider router={router} />);
		const cartLink = screen.getByRole('link', {
			name: '🛒',
		});

		const shopLink = screen.getByRole('link', {
			name: 'Shop',
		});
		await user.click(shopLink);
		const titleEl = await screen.findByText(/Fjallraven/i);
		const card = titleEl.closest(
			'div[class^="_itemCardContainer"]',
		);

		const plusBtn = within(card).getByRole('button', {
			name: '+',
		});
		const minusBtn = within(card).getByRole('button', {
			name: '-',
		});
		const qtyInput = within(card).getByRole('spinbutton'); // input type="number"
		const addToCartBtn = within(card).getByRole('button', {
			name: '🛒',
		});

		await user.click(plusBtn);
		await user.click(plusBtn);
		await user.click(plusBtn);
		expect(qtyInput).toHaveValue(3);
		await user.click(minusBtn);
		expect(qtyInput).toHaveValue(2);
		await user.type(qtyInput, '5');
		expect(qtyInput).toHaveValue(25);
		await user.clear(qtyInput);
		await user.type(qtyInput, '5');
		expect(qtyInput).toHaveValue(5);

		// adding to cart to update the cart label
		expect(cartLink.textContent).toBe('🛒');
		await user.click(addToCartBtn);
		expect(cartLink.textContent).toBe('5 in 🛒');
	});

	it('adding 5 items to cart', async () => {
		const user = userEvent.setup();
		render(<RouterProvider router={router} />);
		const cartLink = screen.getByRole('link', {
			name: '🛒',
		});
		await add5Items(user)
		expect(cartLink.textContent).toBe('5 in 🛒');
	});
});

describe('Cart Component')
