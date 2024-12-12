import { useState } from "react"
import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  const handleAddItem = () => {
    const newItem = { _id: 62555, name: 'Magic Wand', cost: 1, weight: 2 }
    setShopInventory([newItem, ...shopInventory])
  }
  // console.log('Inventory Data:', inventoryData)

  return (
    <>
      <h1>Shop</h1>
      <button onClick={handleAddItem}>Click Here</button>
      <InventoryList inventory={shopInventory} />
    </>
  )
}

export default Shop