import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../graphql/Querys'
import {
  IoArrowBackOutline,
  IoEllipsisHorizontalSharp,
  IoBagOutline,
} from 'react-icons/io5'
import SkuOptions from '../../components/SkuOptions/SkuOptions'

const Details = () => {
  const { id } = useParams()
  const [activeSku, setActiveSku] = useState('35678')
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
    pollInterval: 5000,
  })
  if (loading) return <p>Loading...</p>
  if (error) return alert(error.message)
  if (!data.getProduct) return alert('No product found')

  const product = data.getProduct

  const backNavigation = () => {
    window.history.back()
  }

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
    <div>
      <IoArrowBackOutline onClick={backNavigation} />
      <h1>Details</h1>
      <IoEllipsisHorizontalSharp />
      <img
        src={`/assets${product.image}`}
        width={50}
        height={100}
        alt={product.brand}
      />
      <div>{product.brand}</div>
      <div>price : $ {handleSkuPrice()}</div>
      <div>Origin: {product.origin}</div> |<div>Stock: {handleSkuStock()}</div>
      <div>Abv: {product.abv}</div> |
      <div>
        {product.style} - {product.substyle}
      </div>
      <h3>Description</h3>
      <div>{product.information}</div>
      <h3>Size</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {product.skus.map((sku) => (
          <SkuOptions key={sku.code} sku={sku} setActiveSku={setActiveSku} />
        ))}
      </div>
      <IoBagOutline />
      <button type="button" onClick={() => alert('Added to cart')}>
        Add to cart
      </button>
    </div>
  )
}
export default Details
