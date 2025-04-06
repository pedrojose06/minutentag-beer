import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../graphql/Querys'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductHeader from '../../components/ProductHeader/ProductHeader'
import Loading from '../../components/Loading/Loading'

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    pollInterval: 5000,
  })

  if (loading) return <Loading />
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
