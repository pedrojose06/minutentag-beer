import { IoAdd } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <h3>{product.brand}</h3>
      <img
        src={`/assets${product.image}`}
        width={50}
        height={100}
        alt={product.brand}
      />
      <div className="product-card__footer">
        <p className="product-card__price">$ {product.price.toFixed(2)}</p>
        <div className="product-card__add">
          <IoAdd />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
