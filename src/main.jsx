import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ShopPage from './components/ShopPage/ShopPage.jsx';
import CartPage from './components/CartPage/CartPage.jsx';


const router = createBrowserRouter([
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
