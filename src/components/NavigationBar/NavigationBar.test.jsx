import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';
import { createMemoryRouter, RouterProvider } from "react-router";

import HomePage from '../HomePage/HomePage.jsx';
import ShopPage from '../ShopPage/ShopPage';
import CartPage from '../CartPage/CartPage.jsx';


const router = createMemoryRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      { index: true,  element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ]
  },
])

describe('NavigationBar Componenet', () => {
	it('renders home page', () => {
		render(<RouterProvider router={router} />);
		expect(screen.getAllByRole('heading')[0].textContent).toMatch(
			/Welcome to our shop/i,
		);
	});
});
