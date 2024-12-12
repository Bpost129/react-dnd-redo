import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"

const Shop = () => {
  console.log('Inventory Data:', inventoryData)
  return (
    <>
      <h1>Shop</h1>
      <InventoryList inventoryData={inventoryData} />
    </>
  )
}

export default Shop