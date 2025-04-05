import ProductCard from '../ProductCard/ProductCard'

const ProductsList = ({ products }) => {
  return (
    <section className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
export default ProductsList
