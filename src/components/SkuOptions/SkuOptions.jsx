import SkuOption from '../SkuOption/SkuOption'
import './SkuOptions.css'

const SkuOptions = ({ skus, setActiveSku, activeSku }) => {
  return (
    <section className="sku-options">
      <h4>Size</h4>
      <div style={{ display: 'flex', gap: '10px' }}>
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
