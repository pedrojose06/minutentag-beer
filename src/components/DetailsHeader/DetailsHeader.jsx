import { IoArrowBackOutline, IoEllipsisHorizontalSharp } from 'react-icons/io5'

const DetailsHeader = ({ product }) => {
  const backNavigation = () => {
    window.history.back()
  }
  return (
    <div className="details-top">
      <IoArrowBackOutline onClick={backNavigation} />
      <h1>Details</h1>
      <IoEllipsisHorizontalSharp />
      <img
        src={`/assets${product.image}`}
        width={50}
        height={100}
        alt={product.brand}
      />
    </div>
  )
}
export default DetailsHeader
