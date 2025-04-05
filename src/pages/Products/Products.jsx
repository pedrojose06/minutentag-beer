import { useQuery } from '@apollo/client'
import ProductsList from '../../components/ProductsList/ProductsList'
import { GET_PRODUCTS } from '../../graphql/Querys'
import { IoMenuOutline, IoPersonCircleOutline } from 'react-icons/io5'

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    pollInterval: 5000,
  })

  if (loading) return <p>Loading...</p>
  if (error) return alert(error.message)
  if (!data.getAllProducts) return alert('No products found')

  return (
    <section>
      <IoMenuOutline />
      <IoPersonCircleOutline />
      <h4>Hi, Mrs Michael</h4>
      <h2>Welcome back!</h2>
      <h3>Ours Products</h3>
      <ProductsList products={data.getAllProducts} />
    </section>
  )
}

export default Products
