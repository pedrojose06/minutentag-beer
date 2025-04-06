import './SkuOption.css'

const SkuOption = ({ sku, setActiveSku, activeSku }) => {
  return (
    <div
      key={sku.code}
      className={`sku-option${activeSku === sku.code ? ' sku-option--active' : ''}`}
      onClick={() => setActiveSku(sku.code)}
    >
      <div className="sku-option__title">{sku.name}</div>
    </div>
  )
}
export default SkuOption
