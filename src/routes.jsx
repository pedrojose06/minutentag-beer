import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products/Products'
import ProductDetails from './pages/Details/Details'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default AppRoutes
