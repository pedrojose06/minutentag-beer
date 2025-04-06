import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../graphql/Querys'
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader'
import DetailsContent from '../../components/DetailsContent/DetailsContent'
import SkuOptions from '../../components/SkuOptions/SkuOptions'

const Details = () => {
  const { id } = useParams()
  const [activeSku, setActiveSku] = useState('')
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
    pollInterval: 5000,
  })

  const product = data?.getProduct || null

  useEffect(() => {
    if (product?.skus?.length > 0) {
      setActiveSku(product.skus[0].code)
    }
  }, [product?.skus])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!product) return <p>No product found</p>

  return (
    <div>
      <DetailsHeader product={product} />
      <DetailsContent product={product} activeSku={activeSku} />
      <SkuOptions
        skus={product.skus}
        setActiveSku={setActiveSku}
        activeSku={activeSku}
      />
    </div>
  )
}

export default Details
