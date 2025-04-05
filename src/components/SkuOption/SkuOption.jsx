const SkuOption = ({ sku, setActiveSku }) => {
  return (
    <div
      key={sku.code}
      style={{ border: '1px solid black', padding: '10px' }}
      onClick={() => setActiveSku(sku.code)}
    >
      <div>{sku.name}</div>
    </div>
  )
}
export default SkuOption
