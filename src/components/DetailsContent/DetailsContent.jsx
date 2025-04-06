import { useState } from 'react'

import './DetailsContent.css'

const MAX_CHARACTERS = 200

const DetailsContent = ({ product, activeSku }) => {
  const [isExpanded, setIsExpanded] = useState(false)

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

  const getDescription = () => {
    if (isExpanded || product.information.length <= MAX_CHARACTERS) {
      return product.information
    }
    return `${product.information.slice(0, MAX_CHARACTERS)}...`
  }

  return (
    <div className="details-content">
      <div className="details-content__title">
        <h2>{product.brand}</h2>
        <div className="details-content__price">${handleSkuPrice()}</div>
      </div>
      <div className="details-content__subtitle">
        <div>Origin: {product.origin}</div>
        <div>Stock: {handleSkuStock()}</div>
      </div>
      <div className="details-content__subtitle">
        <div>
          ABV:
          {product.abv}
        </div>
        <div>
          {product.style} - {product.substyle}
        </div>
      </div>
      <h4>Description</h4>
      <p className="details-content__description">
        {getDescription()}
        {product.information.length > MAX_CHARACTERS && (
          <span
            className="details-content__read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? ' Show Less' : ' Read More'}
          </span>
        )}
      </p>
    </div>
  )
}
export default DetailsContent
