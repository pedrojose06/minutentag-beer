import { IoMenuOutline, IoPersonCircleOutline } from 'react-icons/io5'
import './ProductHeader.css'

const ProductHeader = () => {
  return (
    <section className="product-header">
      <div className="product-header__icons">
        <IoMenuOutline className="product-header__icons-menu" />
        <IoPersonCircleOutline />
      </div>
      <h4 className="product-header__greetings">Hi, Mrs Michael</h4>
      <h2>Welcome back!</h2>
      <h3>Ours Products</h3>
    </section>
  )
}
export default ProductHeader
