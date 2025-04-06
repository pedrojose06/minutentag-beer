import SkuOption from '../SkuOption/SkuOption'
import './SkuOptions.css'

const SkuOptions = ({ skus, setActiveSku, activeSku }) => {
  return (
    <section className="sku-options">
      <h4>Size</h4>
      <div className="sku-options__list">
        {skus.map((sku) => (
          <SkuOption
            key={sku.code}
            sku={sku}
            setActiveSku={setActiveSku}
            activeSku={activeSku}
          />
        ))}
      </div>
    </section>
  )
}
export default SkuOptions
