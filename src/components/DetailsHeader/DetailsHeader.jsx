import { IoArrowBackOutline, IoEllipsisHorizontalSharp } from 'react-icons/io5'
import './DetailsHeader.css'

const DetailsHeader = ({ product }) => {
  const backNavigation = () => {
    window.history.back()
  }
  return (
    <div className="details-top">
      <div className="details-top__header">
        <IoArrowBackOutline
          onClick={backNavigation}
          className="details-top__icons"
        />
        <h3>Details</h3>
        <IoEllipsisHorizontalSharp className="details-top__icons" />
      </div>
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
