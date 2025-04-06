import ProductCard from '../ProductCard/ProductCard'
import './ProductsList.css'

const ProductsList = ({ products }) => {
  return (
    <section className="products-list" data-testid="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
export default ProductsList
