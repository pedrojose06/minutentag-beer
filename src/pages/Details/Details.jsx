import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../graphql/Querys'
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader'
import DetailsContent from '../../components/DetailsContent/DetailsContent'
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

  return (
    <div>
      <DetailsHeader product={product} />
      <DetailsContent product={product} activeSku={activeSku} />
      <SkuOptions skus={product.skus} setActiveSku={setActiveSku} />
    </div>
  )
}
export default Details
