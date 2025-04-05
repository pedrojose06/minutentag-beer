import { useQuery } from '@apollo/client'
import ProductsList from '../../components/ProductsList/ProductsList'
import { GET_PRODUCTS } from '../../graphql/Querys'
import {} from 'react-icons/io5'
import ProductHeader from '../../components/ProductHeader/ProductHeader'

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    pollInterval: 5000,
  })

  if (loading) return <p>Loading...</p>
  if (error) return alert(error.message)
  if (!data.getAllProducts) return alert('No products found')

  return (
    <section>
      <ProductHeader />
      <ProductsList products={data.getAllProducts} />
    </section>
  )
}

export default Products
