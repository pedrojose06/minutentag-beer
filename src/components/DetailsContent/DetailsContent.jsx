const DetailsContent = ({ product, activeSku }) => {
  const handleSkuPrice = () => {
    const price = product.skus?.find((sku) => sku.code === activeSku)?.price
    if (!price) return '0.00'
    return (price / 100).toFixed(2)
  }

  const handleSkuStock = () => {
    const stock = product.skus?.find((sku) => sku.code === activeSku)?.stock
    if (!stock) return '0'
    return stock
  }
  return (
    <div className="details-content">
      <div>{product.brand}</div>
      <div>price : $ {handleSkuPrice()}</div>
      <div>Origin: {product.origin}</div> |<div>Stock: {handleSkuStock()}</div>
      <div>Abv: {product.abv}</div> |
      <div>
        {product.style} - {product.substyle}
      </div>
      <h3>Description</h3>
      <div>{product.information}</div>
    </div>
  )
}
export default DetailsContent
