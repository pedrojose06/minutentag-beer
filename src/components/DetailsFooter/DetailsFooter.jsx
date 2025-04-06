import { IoBagOutline } from 'react-icons/io5'
import './DetailsFooter.css'

const DetailsFooter = () => {
  return (
    <div className="detail-footer">
      <div className="detail-footer__icon">
        <IoBagOutline data-testid="detail-footer-icon" />
      </div>
      <button
        type="button"
        onClick={() => alert('Added to cart')}
        className="detail-footer__btn"
      >
        Add to cart
      </button>
    </div>
  )
}
export default DetailsFooter
