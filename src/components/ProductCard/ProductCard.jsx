import { IoAdd } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom' // Import useNavigate

const ProductCard = ({ product }) => {
  const navigate = useNavigate() // Initialize navigate

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
      <p>$ {product.price.toFixed(2)}</p>
      <IoAdd />
    </div>
  )
}

export default ProductCard
