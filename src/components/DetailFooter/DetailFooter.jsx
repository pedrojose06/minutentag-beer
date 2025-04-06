import './DetailFooter'

const DetailFooter = () => {
  return (
    <div className="detail-footer">
      <IoBagOutline />
      <button type="button" onClick={() => alert('Added to cart')}>
        Add to cart
      </button>
    </div>
  )
}
export default DetailFooter
