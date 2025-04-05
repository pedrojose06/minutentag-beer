import SkuOption from '../SkuOption/SkuOption'

const SkuOptions = ({ skus, setActiveSku }) => {
  return (
    <>
      <h3>Size</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {skus.map((sku) => (
          <SkuOption key={sku.code} sku={sku} setActiveSku={setActiveSku} />
        ))}
      </div>
    </>
  )
}
export default SkuOptions
